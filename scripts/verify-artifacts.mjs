import { access } from "node:fs/promises";
import { resolve } from "node:path";
import {
	ARTIFACT_BASENAME,
	BROWSER_ENTRY_FILE,
	BROWSER_MIN_ENTRY_FILE,
	ESM_DEFAULT_FILE,
	ESM_ENTRY_FILE,
	TYPES_DEFAULT_FILE,
	TYPES_ENTRY_FILE,
} from "./artifact-config.mjs";
import { GROUP_EXPORTS, ROOT_METHODS } from "./method-groups.mjs";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const distEsmDir = resolve(distDir, "es");
const distRuntimeDir = resolve(distDir, "cjs");
const distBrowserDir = resolve(distDir, "umd");
const distTypesDir = resolve(distDir, "types");

const mustExist = async (absolutePath) => {
	try {
		await access(absolutePath);
	} catch {
		throw new Error(`[verify-artifacts] Missing artifact: ${absolutePath}`);
	}
};

const requiredPaths = [
	resolve(distEsmDir, ESM_ENTRY_FILE),
	resolve(distEsmDir, ESM_DEFAULT_FILE),
	resolve(distRuntimeDir, `${ARTIFACT_BASENAME}.js`),
	resolve(distBrowserDir, BROWSER_ENTRY_FILE),
	resolve(distBrowserDir, BROWSER_MIN_ENTRY_FILE),
	resolve(distTypesDir, TYPES_ENTRY_FILE),
	resolve(distTypesDir, TYPES_DEFAULT_FILE),
];

for (const name of ROOT_METHODS) {
	requiredPaths.push(resolve(distEsmDir, `${name}.js`));
	requiredPaths.push(resolve(distRuntimeDir, `${name}.js`));
	requiredPaths.push(resolve(distTypesDir, `${name}.d.ts`));
}

for (const groupName of GROUP_EXPORTS) {
	requiredPaths.push(resolve(distEsmDir, `${groupName}.js`));
	requiredPaths.push(resolve(distRuntimeDir, `${groupName}.js`));
	requiredPaths.push(resolve(distTypesDir, `${groupName}.d.ts`));
}

for (const path of requiredPaths) {
	await mustExist(path);
}

console.info(
	`[verify-artifacts] Verified ${requiredPaths.length} required build artifacts.`,
);
