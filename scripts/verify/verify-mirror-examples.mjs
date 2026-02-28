/**
 * Purpose：Ensure examples mirror src file structure with 1:1 mapping.
 * Used in：`pnpm run verify:examples`.
 * Why：Contributors can locate exact example path by source path.
 */
import { access, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const examplesDir = resolve(rootDir, "examples");

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
	const examplePath = resolve(rootDir, "examples", srcFile.replace(/\.ts$/, ".mjs"));
	if (!(await ensureExists(examplePath))) {
		missing.push(srcFile);
	}
}

if (missing.length > 0) {
	throw new Error(
		`[verify-mirror-examples] Missing src-mirror examples:\n${missing.map((item) => `- examples/${item.replace(/\.ts$/, ".mjs")}`).join("\n")}\nRun: pnpm run sync:examples`,
	);
}

const examplesTree = await collectTree(examplesDir);
const expectedFiles = new Set(srcFiles.map((path) => path.replace(/\.ts$/, ".mjs")));
const expectedDirs = srcDirs;
const extraFiles = examplesTree.files.filter((path) => !expectedFiles.has(path)).sort();
const extraDirs = examplesTree.dirs.filter((path) => !expectedDirs.has(path)).sort();

if (extraFiles.length > 0 || extraDirs.length > 0) {
	const lines = [
		...extraFiles.map((item) => `- extra examples/${item}`),
		...extraDirs.map((item) => `- extra examples dir/${item}`),
	];
	throw new Error(
		`[verify-mirror-examples] Found non-mirrored extra example files or dirs:\n${lines.join("\n")}\nRun: pnpm run clean:examples`,
	);
}

console.info(
	`[verify-mirror-examples] Verified src mirror mapping for ${srcFiles.length} source file(s).`,
);
