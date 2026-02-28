/**
 * Purpose：Assemble runtime entry files (main + grouped exports) for Node/CJS-compatible distribution.
 * Used in：`pnpm run build:cjs`, then consumed by the aggregate `build`, prepack, and publish checks.
 * Why：Runtime entry generation must stay synchronized with method/group metadata to avoid broken imports.
 * Note：ESM -> CJS conversion uses TypeScript compiler transpilation (no regex/string-rewrite conversion).
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import ts from "typescript";
import { createFullEntryUtilityLines } from "../meta/full-entry-methods.mjs";
import { GROUP_EXPORTS, GROUP_METHODS, ROOT_METHODS } from "../meta/method-groups.mjs";
import { RUNTIME_ENTRY_FILE } from "./artifact-config.mjs";

const rootDir = process.cwd();
const distEsmDir = resolve(rootDir, "dist/es");
const distRuntimeDir = resolve(rootDir, "dist/cjs");
const pkg = JSON.parse(await readFile(resolve(rootDir, "package.json"), "utf8"));
const VERSION = pkg.version;

const runtimeUtilityMethodLines = createFullEntryUtilityLines({
	indent: "  ",
});

const transpileEsmToCjs = (code, fileName) => {
	const result = ts.transpileModule(code, {
		compilerOptions: {
			module: ts.ModuleKind.CommonJS,
			target: ts.ScriptTarget.ES2022,
		},
		fileName,
		reportDiagnostics: true,
	});
	const diagnostics = (result.diagnostics ?? []).filter(
		(diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error,
	);
	if (diagnostics.length > 0) {
		const host = {
			getCanonicalFileName: (name) => name,
			getCurrentDirectory: () => process.cwd(),
			getNewLine: () => "\n",
		};
		const message = ts.formatDiagnosticsWithColorAndContext(diagnostics, host);
		throw new Error(`[build-runtime] Failed to transpile ${fileName} from ESM to CJS.\n${message}`);
	}
	return result.outputText;
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
	const compiled = transpileEsmToCjs(source, `${name}.js`);
	const hasDefaultExport = /\bexport\s+default\b/.test(source);
	await writeFile(
		resolve(distRuntimeDir, `${name}.js`),
		hasDefaultExport ? `${compiled}\nmodule.exports = exports.default;\n` : compiled,
		"utf8",
	);
}

const esmInternalDir = resolve(distEsmDir, "internal");
const internalFiles = await listJsFilesRecursively(esmInternalDir).catch(() => []);
for (const internalFile of internalFiles) {
	const relativePath = relative(distEsmDir, internalFile);
	const outputPath = resolve(distRuntimeDir, relativePath);
	await mkdir(dirname(outputPath), { recursive: true });
	const source = await readFile(internalFile, "utf8");
	await writeFile(
		outputPath,
		transpileEsmToCjs(source, relative(distEsmDir, internalFile)),
		"utf8",
	);
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
		...GROUP_EXPORTS.map((groupName) => `  '${groupName}': require('./${groupName}'),`),
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
