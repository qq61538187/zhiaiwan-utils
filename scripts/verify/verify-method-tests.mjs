/**
 * Purpose：Ensure tests/type-tests mirror src file structure with 1:1 mapping.
 * Used in：`pnpm run verify:method-tests`, included in fast validation.
 * Why：Any source file changed in PR has an exact test file path counterpart.
 */
import { access, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");

const ensureExists = async (path) => {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
};

const collectTree = async (directory, base = "") => {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = [];
	const dirs = [];
	for (const entry of entries) {
		const relPath = base ? `${base}/${entry.name}` : entry.name;
		const absPath = resolve(directory, entry.name);
		if (entry.isDirectory()) {
			dirs.push(relPath);
			const nested = await collectTree(absPath, relPath);
			files.push(...nested.files);
			dirs.push(...nested.dirs);
			continue;
		}
		if (entry.isFile()) {
			files.push(relPath);
		}
	}
	return { files, dirs };
};

const srcTree = await collectTree(srcDir);
const srcFiles = srcTree.files.filter((path) => path.endsWith(".ts")).sort();
const srcDirs = new Set(srcTree.dirs);

const missing = [];
for (const srcFile of srcFiles) {
	const baseNoExt = srcFile.replace(/\.ts$/, "");
	const runtimeTestPath = resolve(rootDir, "tests", `${baseNoExt}.test.ts`);
	const typeTestPath = resolve(rootDir, "type-tests", `${baseNoExt}.ts`);

	const [hasRuntimeTest, hasTypeTest] = await Promise.all([
		ensureExists(runtimeTestPath),
		ensureExists(typeTestPath),
	]);

	if (!hasRuntimeTest || !hasTypeTest) {
		missing.push({
			srcFile,
			hasRuntimeTest,
			hasTypeTest,
		});
	}
}

const testTree = await collectTree(resolve(rootDir, "tests"));
const typeTestTree = await collectTree(resolve(rootDir, "type-tests"));
const testFiles = testTree.files.sort();
const typeTestFiles = typeTestTree.files.sort();
const testDirs = testTree.dirs.sort();
const typeTestDirs = typeTestTree.dirs.sort();
const expectedTests = new Set(srcFiles.map((path) => path.replace(/\.ts$/, ".test.ts")));
const expectedTypeTests = new Set(srcFiles);
const extraTests = testFiles.filter((path) => !expectedTests.has(path)).sort();
const extraTypeTests = typeTestFiles.filter((path) => !expectedTypeTests.has(path)).sort();
const extraTestDirs = testDirs.filter((path) => !srcDirs.has(path)).sort();
const extraTypeDirs = typeTestDirs.filter((path) => !srcDirs.has(path)).sort();

if (missing.length > 0) {
	const lines = missing.map(
		(item) =>
			`- src/${item.srcFile}: tests/${item.srcFile.replace(/\.ts$/, ".test.ts")}=${item.hasRuntimeTest ? "ok" : "missing"}, type-tests/${item.srcFile}=${item.hasTypeTest ? "ok" : "missing"}`,
	);
	throw new Error(
		`[verify-method-tests] Missing src-mirror tests:\n${lines.join("\n")}\nRun: pnpm run sync:method-tests`,
	);
}

if (
	extraTests.length > 0 ||
	extraTypeTests.length > 0 ||
	extraTestDirs.length > 0 ||
	extraTypeDirs.length > 0
) {
	const lines = [
		...extraTests.map((path) => `- extra tests/${path}`),
		...extraTypeTests.map((path) => `- extra type-tests/${path}`),
		...extraTestDirs.map((path) => `- extra tests dir/${path}`),
		...extraTypeDirs.map((path) => `- extra type-tests dir/${path}`),
	];
	throw new Error(
		`[verify-method-tests] Found non-mirrored extra test files or dirs:\n${lines.join("\n")}\nRun: pnpm run clean:method-tests`,
	);
}

console.info(
	`[verify-method-tests] Verified src mirror mapping for ${srcFiles.length} source file(s).`,
);
