/**
 * Purpose：Validate `package.json.exports` fields against the canonical generated export mapping.
 * Used in：`pnpm run verify:exports`, part of `pnpm run build`.
 * Why：Ensures every public subpath resolves correctly and blocks accidental extra/missing exports.
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createExpectedExports } from "./exports-map.mjs";

const rootDir = process.cwd();
const packagePath = resolve(rootDir, "package.json");
const pkg = JSON.parse(await readFile(packagePath, "utf8"));

if (!pkg.exports || typeof pkg.exports !== "object") {
	throw new Error("package.json exports is missing or invalid");
}

const expectedExports = createExpectedExports();

const assertPath = (key, expected) => {
	const actual = pkg.exports[key];
	if (!actual) {
		throw new Error(`Missing exports entry: ${key}`);
	}
	for (const field of ["types", "import", "default"]) {
		if (actual[field] !== expected[field]) {
			throw new Error(
				`Invalid exports entry ${key}.${field}, expected "${expected[field]}", got "${actual[field]}"`,
			);
		}
	}
};

for (const [subpath, expected] of Object.entries(expectedExports)) {
	assertPath(subpath, expected);
}

const extraEntries = Object.keys(pkg.exports).filter(
	(key) => !(key in expectedExports),
);
if (extraEntries.length > 0) {
	throw new Error(
		`Unexpected exports entries found: ${extraEntries.join(", ")}`,
	);
}

console.info(
	`[verify-exports] Verified exports entries for ${Object.keys(expectedExports).length} paths.`,
);
