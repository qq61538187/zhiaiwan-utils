import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { array, func, math, object } from "../src/index";

const arraySubpathPath = fileURLToPath(
	new URL("../dist/es/array.js", import.meta.url),
);
const funcSubpathPath = fileURLToPath(
	new URL("../dist/es/func.js", import.meta.url),
);
const objectSubpathPath = fileURLToPath(
	new URL("../dist/es/object.js", import.meta.url),
);
const mathSubpathPath = fileURLToPath(
	new URL("../dist/es/math.js", import.meta.url),
);
const describeBuilt =
	existsSync(arraySubpathPath) &&
	existsSync(funcSubpathPath) &&
	existsSync(objectSubpathPath) &&
	existsSync(mathSubpathPath)
		? describe
		: describe.skip;

describe("grouping exports", () => {
	it("exposes array method group", () => {
		expect(array.chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
		expect(array.unique([1, 1, 2])).toEqual([1, 2]);
		expect(array.difference([1, 2, 3], [2])).toEqual([1, 3]);
	});

	it("exposes function method group", () => {
		const wrapped = func.once((n: number) => n + 1);
		expect(wrapped(1)).toBe(2);
		expect(wrapped(9)).toBe(2);
	});

	it("exposes object and math method groups", () => {
		expect(object.pick({ id: 1, name: "zw" }, ["id"] as const)).toEqual({
			id: 1,
		});
		expect(math.add(1, 2)).toBe(3);
	});

	it("supports docs-style grouped imports for array", () => {
		// root named import behavior
		expect(array.chunk([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	it("supports docs-style grouped imports for func", () => {
		// root named import behavior
		const onceFromNamed = func.once((value: number) => value + 1);
		expect(onceFromNamed(1)).toBe(2);
		expect(onceFromNamed(10)).toBe(2);
	});
});

describeBuilt("grouping exports (built subpath imports)", () => {
	it("supports docs-style grouped imports for array subpath default export", async () => {
		// docs example: import { array } from '@zhiaiwan/utils'
		// or: import array from '@zhiaiwan/utils/array'
		// @ts-expect-error generated dist module has no source-time declaration
		const module = await import("../dist/es/array.js");
		const arrayDefault = module.default as typeof array;

		expect(arrayDefault.chunk([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
		expect(arrayDefault.unique([1, 1, 2])).toEqual([1, 2]);
	});

	it("supports docs-style grouped imports for func subpath default export", async () => {
		// docs example: import func from '@zhiaiwan/utils/func'
		// or: import { func } from '@zhiaiwan/utils'
		// @ts-expect-error generated dist module has no source-time declaration
		const module = await import("../dist/es/func.js");
		const funcDefault = module.default as typeof func;
		const onceFromDefault = funcDefault.once((value: number) => value + 1);

		expect(onceFromDefault(1)).toBe(2);
		expect(onceFromDefault(10)).toBe(2);
	});

	it("supports docs-style grouped imports for object and math subpath default export", async () => {
		// @ts-expect-error generated dist module has no source-time declaration
		const objectModule = await import("../dist/es/object.js");
		// @ts-expect-error generated dist module has no source-time declaration
		const mathModule = await import("../dist/es/math.js");
		const objectDefault = objectModule.default as typeof object;
		const mathDefault = mathModule.default as typeof math;

		expect(
			objectDefault.pick({ id: 1, name: "zw" }, ["name"] as const),
		).toEqual({ name: "zw" });
		expect(mathDefault.add(2, 3)).toBe(5);
	});
});
