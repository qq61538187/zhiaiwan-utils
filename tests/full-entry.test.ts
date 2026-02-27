import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const require = createRequire(import.meta.url);

const esmDefaultPath = fileURLToPath(
	new URL("../dist/es/zhiaiwanUtils.default.js", import.meta.url),
);
const runtimePath = fileURLToPath(
	new URL("../dist/cjs/zhiaiwanUtils.js", import.meta.url),
);
const browserPath = fileURLToPath(
	new URL("../dist/umd/zhiaiwanUtils.js", import.meta.url),
);

const describeBuilt =
	existsSync(esmDefaultPath) &&
	existsSync(runtimePath) &&
	existsSync(browserPath)
		? describe
		: describe.skip;

type FullEntryLike = Record<string, unknown> & {
	VERSION: string;
	tap: <T>(value: T, interceptor: (value: T) => unknown) => T;
};

describeBuilt("full entry helpers", () => {
	it("supports VERSION and tap in esm default", async () => {
		// @ts-expect-error generated dist module has no source-time declaration
		const module = await import("../dist/es/zhiaiwanUtils.default.js");
		const utils = module.default as FullEntryLike;

		expect(typeof utils.VERSION).toBe("string");
		const tapped = utils.tap(3, () => {});
		expect(tapped).toBe(3);
	});

	it("supports VERSION and tap in runtime entry", () => {
		const runtime = require("../dist/cjs/zhiaiwanUtils.js");
		expect(typeof runtime.VERSION).toBe("string");
		expect(runtime.tap(5, () => {})).toBe(5);
	});

	it("exposes VERSION in browser entry", () => {
		const browserCode = readFileSync(browserPath, "utf8");
		expect(browserCode).toContain("VERSION");
	});
});
