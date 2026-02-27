import { describe, expect, it } from "vitest";
import {
	assign,
	assignIn,
	assignInWith,
	defaults,
	defaultsDeep,
	findKey,
	forIn,
	forOwn,
	invert,
	keys,
	mapKeys,
	mapValues,
	merge,
	mergeWith,
	omitBy,
	pickBy,
	updateWith,
	values,
} from "../src/index";

describe("object deep methods", () => {
	it("supports keys and values for own enumerable string keys only", () => {
		const proto = { inherited: 1 };
		const symbolKey = Symbol("k");
		const source = Object.create(proto) as Record<string, unknown> & {
			visible: number;
			hidden?: number;
		};
		source.visible = 2;
		Object.defineProperty(source, "hidden", { value: 3, enumerable: false });
		(source as Record<PropertyKey, unknown>)[symbolKey] = 4;

		expect(keys(source)).toEqual(["visible"]);
		expect(values(source)).toEqual([2]);
	});

	it("supports pickBy and omitBy", () => {
		const source = { a: 1, b: 2, c: 3, d: 4 };
		expect(pickBy(source, (value) => value % 2 === 0)).toEqual({ b: 2, d: 4 });
		expect(omitBy(source, (value) => value % 2 === 0)).toEqual({ a: 1, c: 3 });
	});

	it("supports findKey with function predicate", () => {
		const users = {
			barney: { age: 36, active: true },
			fred: { age: 40, active: false },
			pebbles: { age: 1, active: true },
		};
		expect(findKey(users, (value) => value.age < 40)).toBe("barney");
		expect(findKey(users, (value) => value.age > 100)).toBeUndefined();
	});

	it("supports mapValues and mapKeys with overwrite semantics", () => {
		const source = { a: 1, b: 2, c: 3 };
		expect(mapValues(source, (value) => value * 2)).toEqual({
			a: 2,
			b: 4,
			c: 6,
		});
		expect(mapKeys(source, () => "x")).toEqual({ x: 3 });
	});

	it("supports assign mutation and source overwrite order", () => {
		const target = { a: 1 };
		const output = assign(target, { b: 2 }, { a: 3 });
		expect(output).toBe(target);
		expect(target).toEqual({ a: 3, b: 2 });
		expect(
			assign(
				{ a: 1 },
				null as unknown as object,
				undefined as unknown as object,
				{ b: 2 },
			),
		).toEqual({
			a: 1,
			b: 2,
		});
	});

	it("supports defaults fill-only behavior and source order", () => {
		const target = { a: 1 };
		const output = defaults(target, { a: 3, b: 2 }, { b: 4, c: 5 });
		expect(output).toBe(target);
		expect(target).toEqual({ a: 1, b: 2, c: 5 });
	});

	it("supports invert with duplicate values", () => {
		expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ "1": "c", "2": "b" });
	});

	it("merge performs index-based deep merge for arrays", () => {
		const object = { a: [{ b: 2 }, { d: 4 }] };
		const other = { a: [{ c: 3 }, { e: 5 }] };
		expect(merge(object, other)).toEqual({
			a: [
				{ b: 2, c: 3 },
				{ d: 4, e: 5 },
			],
		});
		expect(object).toEqual({
			a: [
				{ b: 2, c: 3 },
				{ d: 4, e: 5 },
			],
		});
	});

	it("mergeWith respects customizer result", () => {
		const object = { a: [1], b: 2 };
		const other = { a: [2], b: 3 };
		const result = mergeWith(object, other, (objValue, srcValue) =>
			Array.isArray(objValue)
				? [...objValue, ...(srcValue as number[])]
				: undefined,
		);
		expect(result).toEqual({ a: [1, 2], b: 3 });
	});

	it("defaultsDeep only fills undefined recursively", () => {
		const object = { a: { b: 2 }, d: undefined as number | undefined };
		expect(defaultsDeep(object, { a: { b: 3, c: 4 }, d: 5 })).toEqual({
			a: { b: 2, c: 4 },
			d: 5,
		});
	});

	it("assignIn and assignInWith include inherited enumerable keys", () => {
		const proto = { inherited: 1 };
		const source = Object.create(proto) as Record<string, number>;
		source.own = 2;
		expect(assignIn({}, source)).toEqual({ inherited: 1, own: 2 });
		expect(
			assignInWith({}, source, (_objValue, srcValue) =>
				typeof srcValue === "number" ? srcValue * 2 : srcValue,
			),
		).toEqual({ inherited: 2, own: 4 });
	});

	it("forIn includes inherited keys while forOwn excludes them", () => {
		const proto = { a: 1 };
		const source = Object.create(proto) as Record<string, number>;
		source.b = 2;
		const inKeys: string[] = [];
		const ownKeys: string[] = [];
		forIn(source, (_v, k) => {
			inKeys.push(k);
		});
		forOwn(source, (_v, k) => {
			ownKeys.push(k);
		});
		expect(inKeys).toContain("a");
		expect(ownKeys).not.toContain("a");
		expect(ownKeys).toContain("b");
	});

	it("updateWith creates path using customizer containers", () => {
		const object: Record<string, unknown> = {};
		updateWith(
			object,
			"a[0].b",
			(value) => ((value as number | undefined) ?? 0) + 1,
			(_nsValue, key) => (key === "a" ? [] : {}),
		);
		expect(object).toEqual({ a: [{ b: 1 }] });
	});
});
