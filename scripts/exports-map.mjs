/**
 * Purpose：Generate the canonical expected `package.json.exports` object from method/group metadata.
 * Used in：`scripts/verify-exports.mjs` during `pnpm run verify:exports` and full build validation.
 * Why：A single source of truth for export subpaths prevents drift between actual package exports and code structure.
 */
import { ARTIFACT_BASENAME } from "./artifact-config.mjs";
import { GROUP_EXPORTS, ROOT_METHODS } from "./method-groups.mjs";

export const createExpectedExports = () => {
	const entries = [
		[
			".",
			{
				types: `./dist/types/${ARTIFACT_BASENAME}.d.ts`,
				import: `./dist/es/${ARTIFACT_BASENAME}.js`,
				default: `./dist/es/${ARTIFACT_BASENAME}.js`,
			},
		],
		...[...ROOT_METHODS, ...GROUP_EXPORTS].map((name) => [
			`./${name}`,
			{
				types: `./dist/types/${name}.d.ts`,
				import: `./dist/es/${name}.js`,
				default: `./dist/es/${name}.js`,
			},
		]),
	];

	return Object.fromEntries(entries);
};
