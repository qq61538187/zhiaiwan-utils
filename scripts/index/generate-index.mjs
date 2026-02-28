/**
 * Purpose：Generate `src/index.ts` from the canonical method/group metadata.
 * Used in：`pnpm run gen:index` and `pnpm run check:index`.
 * Why：Avoid manual maintenance drift for large export/import/group declarations.
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { GROUP_EXPORTS, GROUP_METHODS, ROOT_METHODS } from "../meta/method-groups.mjs";

const rootDir = process.cwd();
const indexPath = resolve(rootDir, "src/index.ts");
const GENERATED_HEADER = [
	"/**",
	" * AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.",
	" * Run `pnpm run gen:index` to regenerate from scripts/meta/method-groups.mjs.",
	" */",
	"",
].join("\n");

const INDEX_TAIL = [
	"",
	'export type { ThrottleOptions } from "./throttle.js";',
	"export type {",
	"  AnyFunction,",
	"  Collection,",
	"  DebouncedFunction,",
	"  Iteratee,",
	"  MemoizedFunction,",
	"  PropertyPath,",
	"  ThrottledFunction,",
	'} from "./types.js";',
	"",
].join("\n");

const IMPORT_ALIAS_MAP = new Map([
	["escape", "escapeFn"],
	["parseInt", "parseIntFn"],
	["unescape", "unescapeFn"],
	["isFinite", "isFiniteFn"],
	["isNaN", "isNaNFn"],
	["toString", "toStringFn"],
]);

const OBJECT_ALIAS_GROUPS = new Set(["string", "lang"]);

const toImportSpecifier = (name) => {
	const alias = IMPORT_ALIAS_MAP.get(name);
	return alias ? `${name} as ${alias}` : name;
};

const toObjectEntry = (name, groupName) => {
	if (!OBJECT_ALIAS_GROUPS.has(groupName)) {
		return `  ${name},`;
	}
	const alias = IMPORT_ALIAS_MAP.get(name);
	if (!alias) {
		return `  ${name},`;
	}
	return `  ${name}: ${alias},`;
};

const buildIndexContent = () => {
	const lines = [];

	for (const name of ROOT_METHODS) {
		lines.push(`export { ${name} } from "./${name}.js";`);
	}

	lines.push('export { createUtilsInstance } from "./createUtilsInstance.js";', "");

	for (const name of ROOT_METHODS) {
		lines.push(`import { ${toImportSpecifier(name)} } from "./${name}.js";`);
	}
	lines.push('import { createUtilsInstance } from "./createUtilsInstance.js";', "");

	for (const groupName of GROUP_EXPORTS) {
		lines.push(`export const ${groupName} = Object.freeze({`);
		for (const methodName of GROUP_METHODS[groupName]) {
			lines.push(toObjectEntry(methodName, groupName));
		}
		if (groupName === "util") {
			lines.push("  createUtilsInstance,");
		}
		lines.push("});");
	}

	return `${GENERATED_HEADER}${lines.join("\n")}${INDEX_TAIL}`;
};

const expected = buildIndexContent();
const isCheckMode = process.argv.includes("--check");

if (isCheckMode) {
	const current = await readFile(indexPath, "utf8");
	if (current !== expected) {
		throw new Error(
			'[check-index] src/index.ts is out of sync. Run "pnpm run gen:index" and commit the result.',
		);
	}
	console.info("[check-index] src/index.ts is in sync.");
} else {
	await writeFile(indexPath, expected, "utf8");
	console.info(`[gen-index] Generated src/index.ts for ${ROOT_METHODS.length} root methods.`);
}
