/**
 * Purpose：Run a minimal runtime smoke test against built CJS and ESM entry artifacts.
 * Used in：`pnpm run test:node:smoke` and the `prepublishOnly` release guard pipeline.
 * Why：Catches packaging/runtime import failures quickly before publishing broken dist outputs.
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { ESM_ENTRY_FILE, RUNTIME_ENTRY_FILE } from "../build/artifact-config.mjs";

const require = createRequire(import.meta.url);
const cjsEntry = require(
	fileURLToPath(new URL(`../../dist/cjs/${RUNTIME_ENTRY_FILE}`, import.meta.url)),
);
const esmEntry = await import(new URL(`../../dist/es/${ESM_ENTRY_FILE}`, import.meta.url));

const runSmoke = (source, label) => {
	if (typeof source.add !== "function") {
		throw new Error(`${label}: add export missing`);
	}
	if (typeof source.array?.chunk !== "function") {
		throw new Error(`${label}: grouped array export missing`);
	}
	if (typeof source.func?.once !== "function") {
		throw new Error(`${label}: grouped func export missing`);
	}

	const sum = source.add(1, 2);
	if (sum !== 3) {
		throw new Error(`${label}: add smoke failed`);
	}

	const chunked = source.array.chunk([1, 2, 3, 4], 2);
	if (!Array.isArray(chunked) || chunked.length !== 2) {
		throw new Error(`${label}: chunk smoke failed`);
	}
};

runSmoke(cjsEntry, "cjs");
runSmoke(esmEntry, "esm");

console.info("node smoke passed (cjs + esm)");
