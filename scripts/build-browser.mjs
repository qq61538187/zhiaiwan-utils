import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { minify } from "terser";
import {
	ARTIFACT_BASENAME,
	ARTIFACT_IDENTIFIER,
	BROWSER_ENTRY_FILE,
	BROWSER_MIN_ENTRY_FILE,
} from "./artifact-config.mjs";
import { createFullEntryUtilityLines } from "./full-entry-methods.mjs";
import {
	GROUP_EXPORTS,
	GROUP_METHODS,
	ROOT_METHODS,
} from "./method-groups.mjs";

const rootDir = process.cwd();
const distEsmDir = resolve(rootDir, "dist/es");
const distBrowserDir = resolve(rootDir, "dist/umd");
const pkg = JSON.parse(
	await readFile(resolve(rootDir, "package.json"), "utf8"),
);
const VERSION = pkg.version;

const toBrowserCode = (code) =>
	code
		.replace(/^export function\s+([a-zA-Z_$][\w$]*)\s*\(/gm, "function $1(")
		.replace(/^export default\s+[a-zA-Z_$][\w$]*;?$/gm, "")
		.trim();

const methodCodes = [];
for (const name of ROOT_METHODS) {
	const source = await readFile(resolve(distEsmDir, `${name}.js`), "utf8");
	methodCodes.push(toBrowserCode(source));
}

const groupObjectLines = GROUP_EXPORTS.flatMap((groupName) => {
	const methodNames = GROUP_METHODS[groupName];
	return [
		`  var ${groupName} = {`,
		...methodNames.map((name) => `    ${name}: ${name},`),
		"  };",
		"",
	];
});

const browserCode = [
	"/**",
	" * @license",
	" * ZhiAiWan Utils",
	" */",
	"(function (global, factory) {",
	"  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :",
	"  typeof define === 'function' && define.amd ? define(factory) :",
	`  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.${ARTIFACT_BASENAME} = factory(global, global.${ARTIFACT_BASENAME}));`,
	"})(this, (function () {",
	"  'use strict';",
	`  var _previousGlobal = typeof globalThis !== 'undefined' ? globalThis.${ARTIFACT_BASENAME} : undefined;`,
	"",
	...methodCodes,
	"",
	...groupObjectLines,
	`  var VERSION = '${VERSION}';`,
	"",
	`  var ${ARTIFACT_IDENTIFIER} = {`,
	...ROOT_METHODS.map((name) => `    ${name}: ${name},`),
	...GROUP_EXPORTS.map((groupName) => `    ${groupName}: ${groupName},`),
	"    VERSION: VERSION,",
	...createFullEntryUtilityLines({
		indent: "    ",
		noConflictBodyLines: [
			`if (typeof globalThis !== 'undefined' && globalThis.${ARTIFACT_BASENAME} === this) {`,
			`  globalThis.${ARTIFACT_BASENAME} = _previousGlobal;`,
			`}`,
			`return this;`,
		],
	}).map((line) =>
		line.replace(/self\.([a-zA-Z_$][\w$]*)\.apply/g, "self.$1.apply"),
	),
	"  };",
	"",
	`  return ${ARTIFACT_IDENTIFIER};`,
	"}));",
	"",
].join(`\n`);

await mkdir(distBrowserDir, { recursive: true });
await writeFile(
	resolve(distBrowserDir, BROWSER_ENTRY_FILE),
	browserCode,
	"utf8",
);

const minified = await minify(browserCode, {
	compress: true,
	mangle: true,
	format: {
		comments: /@license/,
	},
});

if (!minified.code) {
	throw new Error("Failed to minify browser bundle");
}

await writeFile(
	resolve(distBrowserDir, BROWSER_MIN_ENTRY_FILE),
	minified.code,
	"utf8",
);
