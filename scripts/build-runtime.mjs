/**
 * Purpose：Assemble runtime entry files (main + grouped exports) for Node/CJS-compatible distribution.
 * Used in：`pnpm run build:cjs`, then consumed by the aggregate `build`, prepack, and publish checks.
 * Why：Runtime entry generation must stay synchronized with method/group metadata to avoid broken imports.
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { RUNTIME_ENTRY_FILE } from "./artifact-config.mjs";
import { createFullEntryUtilityLines } from "./full-entry-methods.mjs";
import {
	GROUP_EXPORTS,
	GROUP_METHODS,
	ROOT_METHODS,
} from "./method-groups.mjs";

const rootDir = process.cwd();
const distEsmDir = resolve(rootDir, "dist/es");
const distRuntimeDir = resolve(rootDir, "dist/cjs");
const pkg = JSON.parse(
	await readFile(resolve(rootDir, "package.json"), "utf8"),
);
const VERSION = pkg.version;

const runtimeUtilityMethodLines = createFullEntryUtilityLines({
	indent: "  ",
	noConflictBodyLines: ["return this;"],
});

const toCjsCode = (code) => {
	const exportedFunctionNames = Array.from(
		code.matchAll(/^export function\s+([a-zA-Z_$][\w$]*)\s*\(/gm),
		(match) => match[1],
	);
	const exportedConstNames = Array.from(
		code.matchAll(/^export const\s+([a-zA-Z_$][\w$]*)\s*=/gm),
		(match) => match[1],
	);
	const hasDefaultExport = /^export default\s+/m.test(code);
	const transformed = code
		.replace(
			/^import\s+\{([^}]+)\}\s+from\s+['"](.+?)['"];$/gm,
			(_m, imports, mod) => {
				const normalized = String(imports).replace(/\s+as\s+/g, ": ");
				return `var {${normalized}} = require('${mod}');`;
			},
		)
		.replace(
			/^import\s+([a-zA-Z_$][\w$]*)\s+from\s+['"](.+?)['"];$/gm,
			"var $1 = require('$2');",
		)
		.replace(/^export function\s+([a-zA-Z_$][\w$]*)\s*\(/gm, `function $1(`)
		.replace(/^export const\s+([a-zA-Z_$][\w$]*)\s*=/gm, "const $1 =")
		.replace(/^export\s+\{[^}]+\};$/gm, "")
		.replace(/^export default\s+([a-zA-Z_$][\w$]*);$/gm, `module.exports = $1;`)
		.replace(/^export default\s+\{/gm, `module.exports = {`);

	if (hasDefaultExport) {
		return transformed;
	}

	const exportNames = [
		...new Set([...exportedFunctionNames, ...exportedConstNames]),
	];
	if (exportNames.length === 0) {
		return transformed;
	}
	return `${transformed}\n\nmodule.exports = { ${exportNames.join(", ")} };\n`;
};

await mkdir(distRuntimeDir, { recursive: true });

const listJsFilesRecursively = async (targetDir) => {
	const dirEntries = await readdir(targetDir, { withFileTypes: true });
	const files = [];
	for (const entry of dirEntries) {
		const absolutePath = resolve(targetDir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await listJsFilesRecursively(absolutePath)));
			continue;
		}
		if (entry.isFile() && entry.name.endsWith(".js")) {
			files.push(absolutePath);
		}
	}
	return files;
};

for (const name of ROOT_METHODS) {
	const source = await readFile(resolve(distEsmDir, `${name}.js`), "utf8");
	await writeFile(
		resolve(distRuntimeDir, `${name}.js`),
		toCjsCode(source),
		"utf8",
	);
}

const esmInternalDir = resolve(distEsmDir, "internal");
const internalFiles = await listJsFilesRecursively(esmInternalDir).catch(
	() => [],
);
for (const internalFile of internalFiles) {
	const relativePath = relative(distEsmDir, internalFile);
	const outputPath = resolve(distRuntimeDir, relativePath);
	await mkdir(dirname(outputPath), { recursive: true });
	const source = await readFile(internalFile, "utf8");
	await writeFile(outputPath, toCjsCode(source), "utf8");
}

for (const groupName of GROUP_EXPORTS) {
	const methodNames = GROUP_METHODS[groupName];
	await writeFile(
		resolve(distRuntimeDir, `${groupName}.js`),
		[
			`module.exports = {`,
			...methodNames.map((name) => `  '${name}': require('./${name}'),`),
			`};`,
			``,
		].join(`\n`),
		"utf8",
	);
}

await writeFile(
	resolve(distRuntimeDir, RUNTIME_ENTRY_FILE),
	[
		`module.exports = {`,
		...ROOT_METHODS.map((name) => `  '${name}': require('./${name}'),`),
		...GROUP_EXPORTS.map(
			(groupName) => `  '${groupName}': require('./${groupName}'),`,
		),
		`  'VERSION': '${VERSION}',`,
		...runtimeUtilityMethodLines,
		`};`,
		``,
	].join(`\n`),
	"utf8",
);

await writeFile(
	resolve(distRuntimeDir, "package.json"),
	JSON.stringify(
		{
			type: "commonjs",
			main: RUNTIME_ENTRY_FILE,
		},
		null,
		2,
	),
	"utf8",
);
