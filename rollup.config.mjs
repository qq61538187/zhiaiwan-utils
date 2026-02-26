import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import {
	BROWSER_ENTRY_FILE,
	BROWSER_MIN_ENTRY_FILE,
} from "./scripts/artifact-config.mjs";

const input = "src/index.ts";

export default [
	{
		input,
		output: {
			file: `dist/umd/${BROWSER_ENTRY_FILE}`,
			format: "umd",
			name: "ZhiaiwanUtils",
			sourcemap: false,
		},
		plugins: [typescript({ tsconfig: "./tsconfig.json", declaration: false })],
	},
	{
		input,
		output: {
			file: `dist/umd/${BROWSER_MIN_ENTRY_FILE}`,
			format: "umd",
			name: "ZhiaiwanUtils",
			sourcemap: false,
		},
		plugins: [
			typescript({ tsconfig: "./tsconfig.json", declaration: false }),
			terser(),
		],
	},
];
