/**
 * Purpose：Validate `package.json.exports` fields against the canonical generated export mapping.
 * Used in：`pnpm run verify:exports`, part of `pnpm run build`.
 * Why：Ensures every public subpath resolves correctly and blocks accidental extra/missing exports.
 */
import { assertExportsSync } from "./assert-exports-sync.mjs";

const result = await assertExportsSync({
	strict: true,
	messagePrefix: "[verify-exports]",
});

console.info(`[verify-exports] Verified exports entries for ${result.totalPaths} paths.`);
