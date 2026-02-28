/**
 * Purpose：Generate canonical `package.json.exports` for main and subpath wildcard entries.
 * Used in：`scripts/verify-exports.mjs` during `pnpm run verify:exports` and full build validation.
 * Why：Keep exports concise while preserving per-method subpath imports.
 */
import { ARTIFACT_BASENAME } from "../build/artifact-config.mjs";
import { GROUP_EXPORTS, ROOT_METHODS } from "../meta/method-groups.mjs";

const createSubpathEntry = (entryName) => ({
	types: `./dist/types/${entryName}.d.ts`,
	import: `./dist/es/${entryName}.js`,
	require: `./dist/cjs/${entryName}.js`,
	default: `./dist/es/${entryName}.js`,
});

export const createExpectedExports = () => {
	const publicEntryNames = [...new Set([...GROUP_EXPORTS, ...ROOT_METHODS])];

	return {
		".": {
			types: `./dist/types/${ARTIFACT_BASENAME}.d.ts`,
			import: `./dist/es/${ARTIFACT_BASENAME}.js`,
			require: `./dist/cjs/${ARTIFACT_BASENAME}.js`,
			default: `./dist/es/${ARTIFACT_BASENAME}.js`,
		},
		...Object.fromEntries(
			publicEntryNames.map((entryName) => [`./${entryName}`, createSubpathEntry(entryName)]),
		),
	};
};
