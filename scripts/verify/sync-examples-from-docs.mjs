/**
 * Purpose：Sync examples content from docs/api method example sections.
 * Used in：manual sync via `pnpm run sync:examples:docs`.
 * Why：Keep method examples aligned with documentation source of truth.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, relative, resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const docsApiDir = resolve(rootDir, "docs", "api");
const examplesDir = resolve(rootDir, "examples");
const distEntry = resolve(rootDir, "dist", "es", "zhiaiwanUtils.js");

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

const parseMethodExamples = async () => {
	const files = (await readdir(docsApiDir)).filter((file) => file.endsWith(".md"));
	const methodMap = new Map();
	const sectionPattern =
		/^###\s+([A-Za-z0-9_]+)\(\.\.\.args\)\n[\s\S]*?#### Example\n\n```ts\n([\s\S]*?)```/gm;
	for (const file of files) {
		const docPath = resolve(docsApiDir, file);
		const content = await readFile(docPath, "utf8");
		for (const match of content.matchAll(sectionPattern)) {
			const method = match[1];
			const example = match[2].trim();
			if (!methodMap.has(method)) {
				methodMap.set(method, {
					docFile: `docs/api/${file}`,
					example,
				});
			}
		}
	}
	return methodMap;
};

const renderFound = (srcRelPath, docsMeta) => {
	const examplePath = resolve(examplesDir, srcRelPath.replace(/\.ts$/, ".mjs"));
	const relEntry = toPosixPath(relative(dirname(examplePath), distEntry));
	const importPath = relEntry.startsWith(".") ? relEntry : `./${relEntry}`;
	return `import zhiaiwanUtils from "${importPath}";

/*
Source: ${docsMeta.docFile}#${basename(srcRelPath, ".ts")}
${docsMeta.example}
*/

void zhiaiwanUtils;
`;
};

const renderMissing = (srcRelPath) => {
	const method = basename(srcRelPath, ".ts");
	return `// No docs example found for: ${method}
// Source file: src/${srcRelPath}
export {};
`;
};

const methodExamples = await parseMethodExamples();
const srcFiles = (await collectSrcFiles(srcDir)).sort();
const missing = [];
let updated = 0;
let found = 0;

for (const srcRelPath of srcFiles) {
	const method = basename(srcRelPath, ".ts");
	const docsMeta = methodExamples.get(method);
	const targetPath = resolve(examplesDir, srcRelPath.replace(/\.ts$/, ".mjs"));
	const nextContent = docsMeta ? renderFound(srcRelPath, docsMeta) : renderMissing(srcRelPath);
	await writeFile(targetPath, nextContent, "utf8");
	updated += 1;
	if (docsMeta) {
		found += 1;
	} else {
		missing.push({
			method,
			srcPath: `src/${srcRelPath}`,
			examplePath: `examples/${srcRelPath.replace(/\.ts$/, ".mjs")}`,
		});
	}
}

console.info(
	`[sync-examples-from-docs] Synced ${updated} files. found=${found}, missing=${missing.length}.`,
);
if (missing.length > 0) {
	console.info("[sync-examples-from-docs] Missing methods:");
	for (const item of missing) {
		console.info(`- ${item.method}\t${item.srcPath}\t${item.examplePath}`);
	}
}
