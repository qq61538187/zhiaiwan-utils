/**
 * Purpose：Verify method/group metadata consistency against source files, index exports, and docs anchors.
 * Used in：`pnpm run verify:methods`, part of the default build pipeline.
 * Why：Detects metadata drift early so generated artifacts and docs do not diverge from actual public methods.
 */
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
	ALIAS_TO_CANONICAL,
	GROUP_EXPORTS,
	GROUP_METHODS,
	METHOD_META,
	ROOT_METHODS,
} from "../meta/method-groups.mjs";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const indexPath = resolve(srcDir, "index.ts");
const generatedMethodsDocPath = resolve(rootDir, "docs/api/generated-methods.md");

const ensureUnique = (label, values) => {
	const duplicated = values.filter((value, index) => values.indexOf(value) !== index);
	if (duplicated.length > 0) {
		throw new Error(
			`${label} contains duplicated method names: ${[...new Set(duplicated)].join(", ")}`,
		);
	}
};

const ensureSubset = (label, subset, superset) => {
	const set = new Set(superset);
	const missing = subset.filter((name) => !set.has(name));
	if (missing.length > 0) {
		throw new Error(`${label} are not included in ROOT_METHODS: ${missing.join(", ")}`);
	}
};

for (const [groupName, methodNames] of Object.entries(GROUP_METHODS)) {
	ensureUnique(`${groupName.toUpperCase()}_METHODS`, methodNames);
	ensureSubset(`${groupName.toUpperCase()}_METHODS`, methodNames, ROOT_METHODS);
}
ensureUnique("GROUP_EXPORTS", GROUP_EXPORTS);
ensureUnique("ROOT_METHODS", ROOT_METHODS);
ensureUnique("METHOD_META keys", Object.keys(METHOD_META));

for (const name of ROOT_METHODS) {
	const methodSourcePath = resolve(srcDir, `${name}.ts`);
	try {
		await access(methodSourcePath);
	} catch {
		throw new Error(`Missing source file for method "${name}": ${methodSourcePath}`);
	}
}

const indexContent = await readFile(indexPath, "utf8");
for (const name of ROOT_METHODS) {
	const exportLine = `export { ${name} } from './${name}.js'`;
	const exportPattern = new RegExp(`export \\{ ${name} \\} from ["']\\./${name}\\.js["']`);
	if (!exportPattern.test(indexContent)) {
		throw new Error(`Missing index export for method "${name}": ${exportLine}`);
	}
}

for (const groupName of GROUP_EXPORTS) {
	const exportLine = `export const ${groupName} = Object.freeze({`;
	if (!indexContent.includes(exportLine)) {
		throw new Error(`Missing grouped export declaration for "${groupName}": ${exportLine}`);
	}
}

for (const methodName of ROOT_METHODS) {
	const meta = METHOD_META[methodName];
	if (!meta) {
		throw new Error(`Missing metadata entry for method "${methodName}"`);
	}
	if (meta.name !== methodName) {
		throw new Error(`Invalid metadata name for "${methodName}", got "${meta.name}"`);
	}
	if (!GROUP_METHODS[meta.group]?.includes(methodName)) {
		throw new Error(`Invalid metadata group for "${methodName}", got "${meta.group}"`);
	}
	if (meta.since !== "0.1.0") {
		throw new Error(`Invalid metadata since for "${methodName}", got "${meta.since}"`);
	}
	if (meta.stability !== "stable") {
		throw new Error(`Invalid metadata stability for "${methodName}", got "${meta.stability}"`);
	}
}

for (const [aliasName, canonicalName] of Object.entries(ALIAS_TO_CANONICAL)) {
	if (!ROOT_METHODS.includes(aliasName)) {
		throw new Error(`Alias method "${aliasName}" is not in ROOT_METHODS`);
	}
	if (!ROOT_METHODS.includes(canonicalName)) {
		throw new Error(
			`Canonical method "${canonicalName}" for alias "${aliasName}" is not in ROOT_METHODS`,
		);
	}
	if (METHOD_META[aliasName].canonical !== canonicalName) {
		throw new Error(`Alias canonical mismatch for "${aliasName}", expected "${canonicalName}"`);
	}
}

const generatedMethodsDocContent = await readFile(generatedMethodsDocPath, "utf8");
for (const methodName of ROOT_METHODS) {
	const methodBullet = `- \`${methodName}\``;
	if (!generatedMethodsDocContent.includes(methodBullet)) {
		throw new Error(
			`Missing generated methods doc entry for "${methodName}" in docs/api/generated-methods.md`,
		);
	}
}

console.info(
	`[verify-methods] Verified ${ROOT_METHODS.length} root methods, metadata, and source/index/docs consistency.`,
);
