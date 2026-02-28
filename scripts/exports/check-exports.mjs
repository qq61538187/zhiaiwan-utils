/**
 * Purpose：Fail fast when package.json exports drift from canonical mapping.
 * Used in：CI and local pre-build checks (`pnpm run check:exports`).
 * Why：Build should not mutate package.json; export drift must be fixed explicitly.
 */
import { assertExportsSync } from "./assert-exports-sync.mjs";

const result = await assertExportsSync({ messagePrefix: "[check-exports]" });

console.info(`[check-exports] exports are in sync (${result.totalPaths} paths).`);
