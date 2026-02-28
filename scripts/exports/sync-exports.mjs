/**
 * Purpose：Sync package.json exports from the canonical generated export mapping.
 * Used in：`pnpm run sync:exports`, optionally before verify/build/release.
 * Why：Avoids manual maintenance for hundreds of export entries and keeps CJS/ESM paths aligned.
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { writeExportsArtifact } from "./exports-artifact.mjs";
import { createExpectedExports } from "./exports-map.mjs";

const rootDir = process.cwd();
const packagePath = resolve(rootDir, "package.json");
const packageRaw = await readFile(packagePath, "utf8");
const pkg = JSON.parse(packageRaw);
const expectedExports = createExpectedExports();

await writeExportsArtifact(expectedExports);
pkg.exports = expectedExports;

await writeFile(`${packagePath}`, `${JSON.stringify(pkg, null, "\t")}\n`, "utf8");

console.info(
	`[sync-exports] Synced exports artifact and package.json for ${Object.keys(pkg.exports).length} paths.`,
);
