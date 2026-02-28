/**
 * Purpose：Compose top-level and grouped TypeScript declaration entry files for all public exports.
 * Used in：`pnpm run build:types` within the default build/prepack workflow.
 * Why：Type entry files must mirror runtime exports; this prevents TS consumers from missing or incorrect d.ts paths.
 */
import { rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { GROUP_EXPORTS, GROUP_METHODS, ROOT_METHODS } from "../meta/method-groups.mjs";
import {
	TYPES_DEFAULT_FILE,
	TYPES_DEFAULT_IDENTIFIER,
	TYPES_ENTRY_FILE,
} from "./artifact-config.mjs";

const rootDir = process.cwd();
const distTypesDir = resolve(rootDir, "dist/types");

const groupTypeIdentifier = (groupName) => `${groupName}Methods`;

for (const groupName of GROUP_EXPORTS) {
	const methodNames = GROUP_METHODS[groupName];
	const identifier = groupTypeIdentifier(groupName);

	await writeFile(
		resolve(distTypesDir, `${groupName}.default.d.ts`),
		[
			...methodNames.map((name) => `import type ${name} from './${name}.js';`),
			"",
			`declare const ${identifier}: {`,
			...methodNames.map((name) => `  ${name}: typeof ${name};`),
			"};",
			"",
			`export default ${identifier};`,
			"",
		].join(`\n`),
		"utf8",
	);

	await writeFile(
		resolve(distTypesDir, `${groupName}.d.ts`),
		[
			...methodNames.map((name) => `export { default as ${name} } from './${name}.js';`),
			`export { default } from './${groupName}.default.js';`,
			"",
		].join(`\n`),
		"utf8",
	);
}

await writeFile(
	resolve(distTypesDir, TYPES_DEFAULT_FILE),
	[
		...ROOT_METHODS.map((name) => `import type ${name} from './${name}.js';`),
		...GROUP_EXPORTS.map(
			(groupName) => `import type ${groupName}Methods from './${groupName}.js';`,
		),
		"",
		`declare const ${TYPES_DEFAULT_IDENTIFIER}: {`,
		...ROOT_METHODS.map((name) => `  ${name}: typeof ${name};`),
		...GROUP_EXPORTS.map((groupName) => `  ${groupName}: typeof ${groupName}Methods;`),
		"  VERSION: string;",
		"  tap: <T>(value: T, interceptor: (value: T) => void) => T;",
		"};",
		"",
		`export default ${TYPES_DEFAULT_IDENTIFIER};`,
		"",
	].join(`\n`),
	"utf8",
);

await writeFile(
	resolve(distTypesDir, TYPES_ENTRY_FILE),
	[
		...ROOT_METHODS.map((name) => `export { default as ${name} } from './${name}.js';`),
		...GROUP_EXPORTS.map(
			(groupName) => `export { default as ${groupName} } from './${groupName}.js';`,
		),
		`export { default } from './${TYPES_DEFAULT_FILE.replace(".d.ts", ".js")}';`,
		"",
	].join(`\n`),
	"utf8",
);

const cleanupCandidates = [
	"index.d.ts",
	"types.d.ts",
	"function.d.ts",
	"function.default.d.ts",
	"zhiaiwan-utils.d.ts",
	"zhiaiwan-utils.default.d.ts",
];
for (const fileName of cleanupCandidates) {
	try {
		await rm(resolve(distTypesDir, fileName));
	} catch (error) {
		if (!(error && typeof error === "object" && "code" in error && error.code === "ENOENT")) {
			throw error;
		}
	}
}
