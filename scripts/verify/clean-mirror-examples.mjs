/**
 * Purpose：Delete non-mirrored files/directories from examples to match src layout 1:1.
 * Used in：manual cleanup via `pnpm run clean:examples`.
 * Why：Old handcrafted examples should not break strict mirror policy.
 */
import { readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const examplesDir = resolve(rootDir, "examples");

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
const expectedFiles = new Set(srcFiles.map((path) => path.replace(/\.ts$/, ".mjs")));

const examplesTree = await collectTree(examplesDir);
const extraFiles = examplesTree.files.filter((path) => !expectedFiles.has(path));
const extraDirs = examplesTree.dirs.filter((path) => !srcDirs.has(path));

for (const relPath of extraFiles) {
	await rm(resolve(examplesDir, relPath), { force: true });
}
for (const relPath of extraDirs) {
	await rm(resolve(examplesDir, relPath), { recursive: true, force: true });
}

console.info(
	`[clean-mirror-examples] Removed files=${extraFiles.length}, dirs=${extraDirs.length}.`,
);
