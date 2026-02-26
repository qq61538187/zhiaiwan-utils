import { rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import {
	ARTIFACT_IDENTIFIER,
	ESM_DEFAULT_FILE,
	ESM_ENTRY_FILE,
} from "./artifact-config.mjs";
import { createFullEntryUtilityLines } from "./full-entry-methods.mjs";
import {
	GROUP_EXPORTS,
	GROUP_METHODS,
	ROOT_METHODS,
} from "./method-groups.mjs";

const rootDir = process.cwd();
const distEsmDir = resolve(rootDir, "dist/es");
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
const VERSION = pkg.version;
const rootExports = [...ROOT_METHODS, ...GROUP_EXPORTS];

const rootBarrel = rootExports
	.map((name) => `export { default as ${name} } from './${name}.js';`)
	.join(`\n`);

for (const groupName of GROUP_EXPORTS) {
	const methodNames = GROUP_METHODS[groupName];
	const groupBarrel = methodNames
		.map((name) => `export { default as ${name} } from './${name}.js';`)
		.join(`\n`);

	await writeFile(
		resolve(distEsmDir, `${groupName}.default.js`),
		[
			...methodNames.map((name) => `import ${name} from './${name}.js';`),
			"",
			`const ${groupName} = {`,
			...methodNames.map(
				(name, index) =>
					`  ${name}${index === methodNames.length - 1 ? "" : ","}`,
			),
			"};",
			"",
			`export default ${groupName};`,
			"",
		].join(`\n`),
		"utf8",
	);

	await writeFile(
		resolve(distEsmDir, `${groupName}.js`),
		`${groupBarrel}\nexport { default } from './${groupName}.default.js';\n`,
		"utf8",
	);
}

await writeFile(
	resolve(distEsmDir, ESM_DEFAULT_FILE),
	[
		"/**",
		" * @license",
		" * ZhiAiWan Utils (Custom Build)",
		" */",
		...ROOT_METHODS.map((name) => `import ${name} from './${name}.js';`),
		...GROUP_EXPORTS.map(
			(groupName) => `import ${groupName} from './${groupName}.js';`,
		),
		"",
		`var ${ARTIFACT_IDENTIFIER} = {`,
		...ROOT_METHODS.map((name) => `  ${name}: ${name},`),
		...GROUP_EXPORTS.map((groupName) => `  ${groupName}: ${groupName},`),
		`  VERSION: '${VERSION}',`,
		...createFullEntryUtilityLines({
			indent: "  ",
			noConflictBodyLines: ["return this;"],
		}),
		"};",
		"",
		`export default ${ARTIFACT_IDENTIFIER};`,
		"",
	].join(`\n`),
	"utf8",
);

await writeFile(
	resolve(distEsmDir, ESM_ENTRY_FILE),
	`${rootBarrel}\nexport { default } from './${ESM_DEFAULT_FILE}';\n`,
	"utf8",
);

const cleanupCandidates = [
	"index.js",
	"types.js",
	"function.js",
	"function.default.js",
	"lodash.js",
	"lodash.default.js",
	"zhiaiwan-utils.js",
	"zhiaiwan-utils.default.js",
];
for (const fileName of cleanupCandidates) {
	try {
		await rm(resolve(distEsmDir, fileName));
	} catch (error) {
		if (
			!(
				error &&
				typeof error === "object" &&
				"code" in error &&
				error.code === "ENOENT"
			)
		) {
			throw error;
		}
	}
}
