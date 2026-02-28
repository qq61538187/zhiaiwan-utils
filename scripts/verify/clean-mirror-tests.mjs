/**
 * Purpose：Delete non-mirrored files from tests/type-tests so they match src layout 1:1.
 * Used in：manual cleanup via `pnpm run clean:method-tests`.
 * Why：When migrating to strict mirror mode, old aggregated test files must be removed.
 */
import { readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const testsDir = resolve(rootDir, "tests");
const typeTestsDir = resolve(rootDir, "type-tests");

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
const expectedTests = new Set(srcFiles.map((path) => path.replace(/\.ts$/, ".test.ts")));
const expectedTypeTests = new Set(srcFiles);

const testTree = await collectTree(testsDir);
const typeTestTree = await collectTree(typeTestsDir);
const testFiles = testTree.files.sort();
const typeTestFiles = typeTestTree.files.sort();
const testDirs = testTree.dirs.sort();
const typeTestDirs = typeTestTree.dirs.sort();

const extraTests = testFiles.filter((path) => !expectedTests.has(path));
const extraTypeTests = typeTestFiles.filter((path) => !expectedTypeTests.has(path));
const extraTestDirs = testDirs.filter((path) => !srcDirs.has(path));
const extraTypeDirs = typeTestDirs.filter((path) => !srcDirs.has(path));

for (const relPath of extraTests) {
	await rm(resolve(testsDir, relPath), { force: true });
}
for (const relPath of extraTypeTests) {
	await rm(resolve(typeTestsDir, relPath), { force: true });
}
for (const relPath of extraTestDirs) {
	await rm(resolve(testsDir, relPath), { recursive: true, force: true });
}
for (const relPath of extraTypeDirs) {
	await rm(resolve(typeTestsDir, relPath), { recursive: true, force: true });
}

console.info(
	`[clean-mirror-tests] Removed testFiles=${extraTests.length}, typeTestFiles=${extraTypeTests.length}, testDirs=${extraTestDirs.length}, typeTestDirs=${extraTypeDirs.length}.`,
);
