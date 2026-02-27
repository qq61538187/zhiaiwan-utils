/**
 * Purpose：Produce browser-distributable bundles (normal + minified) from built runtime artifacts.
 * Used in：`pnpm run build:umd` and the full `pnpm run build` / prepack release pipeline.
 * Why：Browser consumers need standalone artifacts; this step guarantees predictable UMD/global outputs.
 */
import { mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import terser from "@rollup/plugin-terser";
import { rollup } from "rollup";
import {
	ARTIFACT_BASENAME,
	BROWSER_ENTRY_FILE,
	BROWSER_MIN_ENTRY_FILE,
	ESM_ENTRY_FILE,
} from "./artifact-config.mjs";

const rootDir = process.cwd();
const distEsmDir = resolve(rootDir, "dist/es");
const distBrowserDir = resolve(rootDir, "dist/umd");
const pkg = JSON.parse(
	await readFile(resolve(rootDir, "package.json"), "utf8"),
);
const VERSION = pkg.version;

await mkdir(distBrowserDir, { recursive: true });
const bundle = await rollup({
	input: resolve(distEsmDir, ESM_ENTRY_FILE),
});

const banner = `/** @license ZhiAiWan Utils v${VERSION} */`;

await bundle.write({
	file: resolve(distBrowserDir, BROWSER_ENTRY_FILE),
	format: "umd",
	name: ARTIFACT_BASENAME,
	exports: "named",
	banner,
});

await bundle.write({
	file: resolve(distBrowserDir, BROWSER_MIN_ENTRY_FILE),
	format: "umd",
	name: ARTIFACT_BASENAME,
	exports: "named",
	banner,
	plugins: [
		terser({
			maxWorkers: 1,
			format: {
				comments: /@license/,
			},
		}),
	],
});

await bundle.close();
