/**
 * Purpose：Create missing mirror example files so examples match src structure 1:1.
 * Used in：manual maintenance via `pnpm run sync:examples`.
 * Why：Every source file should have a deterministic example entry path.
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const examplesDir = resolve(rootDir, "examples");
const distEsDir = resolve(rootDir, "dist", "es");

const toPosixPath = (value) => value.split("\\").join("/");

const collectSrcFiles = async (directory, base = "") => {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const relPath = base ? `${base}/${entry.name}` : entry.name;
		const absPath = resolve(directory, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await collectSrcFiles(absPath, relPath)));
			continue;
		}
		if (entry.isFile() && relPath.endsWith(".ts")) {
			files.push(relPath);
		}
	}
	return files;
};

const ensureFile = async (path, content) => {
	try {
		await readFile(path, "utf8");
		return false;
	} catch {
		await mkdir(dirname(path), { recursive: true });
		await writeFile(path, content, "utf8");
		return true;
	}
};

const exampleTemplate = (srcRelPath, exampleAbsPath) => {
	const baseNoExt = srcRelPath.replace(/\.ts$/, "");
	const relImport = toPosixPath(
		relative(dirname(exampleAbsPath), resolve(distEsDir, `${baseNoExt}.js`)),
	);
	const importPath = relImport.startsWith(".") ? relImport : `./${relImport}`;
	return `import * as moduleRef from "${importPath}";

console.log("example: ${baseNoExt}");
console.log("exports:", Object.keys(moduleRef));
`;
};

const srcFiles = (await collectSrcFiles(srcDir)).sort();
let created = 0;

for (const srcRelPath of srcFiles) {
	const exampleAbsPath = resolve(examplesDir, `${srcRelPath.replace(/\.ts$/, ".mjs")}`);
	if (await ensureFile(exampleAbsPath, exampleTemplate(srcRelPath, exampleAbsPath))) {
		created += 1;
	}
}

console.info(
	`[sync-mirror-examples] Synced src-mirror examples. created=${created}, srcFiles=${srcFiles.length}.`,
);
