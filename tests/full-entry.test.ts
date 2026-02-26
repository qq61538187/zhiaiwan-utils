import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
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
	methods: () => string[];
	has: (name: string) => boolean;
	tap: <T>(value: T, interceptor: (value: T) => unknown) => T;
	thru: <T, R>(value: T, interceptor: (value: T) => R) => R;
	chain: (value: unknown) => {
		chunk: (size?: number) => { value: () => unknown };
	};
	mixin: (source: Record<string, (value: number) => number>) => void;
	runInContext: () => FullEntryLike;
	noConflict: () => FullEntryLike;
	plusOne: (value: number) => number;
};

describeBuilt("full entry helpers", () => {
	it("supports VERSION, methods, has, mixin, runInContext, chain, tap, thru in esm default", async () => {
		// @ts-expect-error generated dist module has no source-time declaration
		const module = await import("../dist/es/zhiaiwanUtils.default.js");
		const utils = module.default as FullEntryLike;

		expect(typeof utils.VERSION).toBe("string");
		expect(utils.methods()).toContain("tap");
		expect(utils.methods()).toContain("thru");
		expect(utils.has("add")).toBe(true);
		expect(utils.has("notExists")).toBe(false);

		const tapped = utils.tap(3, () => {});
		expect(tapped).toBe(3);
		const thruResult = utils.thru(3, (value: number) => value + 2);
		expect(thruResult).toBe(5);

		const chained = utils.chain([1, 2, 3, 4]).chunk(2).value();
		expect(chained).toEqual([
			[1, 2],
			[3, 4],
		]);

		utils.mixin({
			plusOne: (value: number) => value + 1,
		});
		expect(utils.plusOne(1)).toBe(2);
		const cloned = utils.runInContext();
		expect(cloned).not.toBe(utils);
		expect(cloned.plusOne(1)).toBe(2);
	});

	it("supports helper APIs in runtime entry", () => {
		const runtime = require("../dist/cjs/zhiaiwanUtils.js");
		expect(typeof runtime.VERSION).toBe("string");
		expect(runtime.methods()).toContain("tap");
		expect(runtime.has("chunk")).toBe(true);
		expect(runtime.thru(5, (v: number) => v * 2)).toBe(10);
	});

	it("supports noConflict in browser entry", () => {
		const previousGlobal = { old: true };
		const sandbox: Record<string, unknown> = {
			console,
			zhiaiwanUtils: previousGlobal,
		};
		sandbox.globalThis = sandbox;
		sandbox.self = sandbox;

		const browserCode = readFileSync(browserPath, "utf8");
		vm.runInNewContext(browserCode, sandbox);

		const loaded = sandbox.zhiaiwanUtils as FullEntryLike;
		expect(loaded).not.toBe(previousGlobal);
		expect(typeof loaded.noConflict).toBe("function");

		const returned = loaded.noConflict();
		expect(returned).toBe(loaded);
		expect(sandbox.zhiaiwanUtils).toBe(previousGlobal);
	});
});
