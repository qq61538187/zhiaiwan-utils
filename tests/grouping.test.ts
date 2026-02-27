import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
	array,
	collection,
	func,
	lang,
	math,
	object,
	string,
	util,
} from "../src/index";

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
const collectionSubpathPath = fileURLToPath(
	new URL("../dist/es/collection.js", import.meta.url),
);
const stringSubpathPath = fileURLToPath(
	new URL("../dist/es/string.js", import.meta.url),
);
const langSubpathPath = fileURLToPath(
	new URL("../dist/es/lang.js", import.meta.url),
);
const utilSubpathPath = fileURLToPath(
	new URL("../dist/es/util.js", import.meta.url),
);
const describeBuilt =
	existsSync(arraySubpathPath) &&
	existsSync(funcSubpathPath) &&
	existsSync(objectSubpathPath) &&
	existsSync(mathSubpathPath) &&
	existsSync(collectionSubpathPath) &&
	existsSync(stringSubpathPath) &&
	existsSync(langSubpathPath) &&
	existsSync(utilSubpathPath)
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
		expect(func.throttle((n: number) => n + 1, 0).flush()).toBeUndefined();
	});

	it("exposes util method group", () => {
		expect(
			util.flow(
				(n: number) => n + 1,
				(n: number) => n * 2,
			)(1),
		).toBe(4);
		expect(
			util.flowRight(
				(n: number) => n * 2,
				(n: number) => n + 1,
			)(1),
		).toBe(4);
		expect(util.identity("a")).toBe("a");
	});

	it("exposes object and math method groups", () => {
		expect(object.pick({ id: 1, name: "zw" }, ["id"] as const)).toEqual({
			id: 1,
		});
		expect(object.keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
		expect(object.values({ a: 1, b: 2 })).toEqual([1, 2]);
		expect(object.at({ a: [{ b: 2 }] }, ["a[0].b"])).toEqual([2]);
		expect(object.get({ a: [{ b: 2 }] }, "a[0].b")).toBe(2);
		expect(object.pickBy({ a: 1, b: 2 }, (value) => value > 1)).toEqual({
			b: 2,
		});
		expect(object.omitBy({ a: 1, b: 2 }, (value) => value > 1)).toEqual({
			a: 1,
		});
		expect(object.hasIn(Object.create({ a: { b: 2 } }), "a.b")).toBe(true);
		expect(object.result({ a: { fn: () => 3 } }, "a.fn")).toBe(3);
		expect(object.findKey({ a: 1, b: 2 }, (value) => value === 2)).toBe("b");
		expect(object.mapValues({ a: 1, b: 2 }, (value) => value * 2)).toEqual({
			a: 2,
			b: 4,
		});
		expect(object.mapKeys({ a: 1, b: 2 }, (_value, key) => `${key}_x`)).toEqual(
			{
				a_x: 1,
				b_x: 2,
			},
		);
		expect(object.assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
		expect(object.defaults({ a: 1 }, { a: 3, b: 2 })).toEqual({ a: 1, b: 2 });
		expect(object.invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
		const target = { a: [{ b: { c: 1 } }] };
		expect(object.unset(target, "a[0].b.c")).toBe(true);
		expect(target).toEqual({ a: [{ b: {} }] });
		expect(math.add(1, 2)).toBe(3);
	});

	it("exposes collection, string and lang method groups", () => {
		expect(collection.map([{ n: 1 }, { n: 2 }], "n")).toEqual([1, 2]);
		expect(collection.countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			"4": 1,
			"6": 2,
		});
		expect(collection.every([1, 2, 3], (n) => n > 0)).toBe(true);
		expect(collection.some([0, null, "ok"])).toBe(true);
		expect(collection.includes([1, 2, 3], 2)).toBe(true);
		expect(collection.size({ a: 1, b: 2 })).toBe(2);
		expect(string.camelCase("Foo Bar")).toBe("fooBar");
		expect(lang.isNil(null)).toBe(true);
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

	it("supports docs-style grouped imports for collection/string/lang", () => {
		expect(collection.groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			"4": [4.2],
			"6": [6.1, 6.3],
		});
		expect(string.kebabCase("Foo Bar")).toBe("foo-bar");
		expect(lang.isEmpty([])).toBe(true);
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

	it("supports docs-style grouped imports for collection/string/lang subpath default export", async () => {
		// @ts-expect-error generated dist module has no source-time declaration
		const collectionModule = await import("../dist/es/collection.js");
		// @ts-expect-error generated dist module has no source-time declaration
		const stringModule = await import("../dist/es/string.js");
		// @ts-expect-error generated dist module has no source-time declaration
		const langModule = await import("../dist/es/lang.js");

		const collectionDefault = collectionModule.default as typeof collection;
		const stringDefault = stringModule.default as typeof string;
		const langDefault = langModule.default as typeof lang;

		expect(collectionDefault.reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
		expect(stringDefault.snakeCase("Foo Bar")).toBe("foo_bar");
		expect(langDefault.isString("abc")).toBe(true);
	});

	it("supports docs-style grouped imports for util subpath default export", async () => {
		// @ts-expect-error generated dist module has no source-time declaration
		const utilModule = await import("../dist/es/util.js");
		const utilDefault = utilModule.default as typeof util;

		expect(
			utilDefault.flow(
				(n: number) => n + 1,
				(n: number) => n * 2,
			)(1),
		).toBe(4);
		expect(
			utilDefault.flowRight(
				(n: number) => n * 2,
				(n: number) => n + 1,
			)(1),
		).toBe(4);
	});
});
