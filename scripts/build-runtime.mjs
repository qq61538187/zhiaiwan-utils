import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
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

const toCjsCode = (code) =>
	code
		.replace(
			/^import\s+([a-zA-Z_$][\w$]*)\s+from\s+'(.+?)';$/gm,
			"var $1 = require('$2');",
		)
		.replace(/^export function\s+([a-zA-Z_$][\w$]*)\s*\(/gm, `function $1(`)
		.replace(/^export default\s+([a-zA-Z_$][\w$]*);$/gm, `module.exports = $1;`)
		.replace(/^export default\s+\{/gm, `module.exports = {`);

await mkdir(distRuntimeDir, { recursive: true });

for (const name of ROOT_METHODS) {
	const source = await readFile(resolve(distEsmDir, `${name}.js`), "utf8");
	await writeFile(
		resolve(distRuntimeDir, `${name}.js`),
		toCjsCode(source),
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
