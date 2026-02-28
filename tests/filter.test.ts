import { describe, expect, it } from "vitest";
import { filter } from "../src/filter";

describe("src/filter", () => {
	it("filters arrays and objects with iteratee", () => {
		expect(filter([1, 2, 3], (v) => Number(v) > 1)).toEqual([2, 3]);
		expect(filter({ a: 1, b: 2 }, (v) => Number(v) > 1)).toEqual([2]);
	});

	it("supports iteratee shorthands", () => {
		expect(filter([{ a: 1 }, { a: 0 }], "a")).toEqual([{ a: 1 }]);
		expect(filter([{ a: { b: 2 } }, { a: { b: 1 } }], ["a.b", 2])).toEqual([{ a: { b: 2 } }]);
	});

	it("returns empty for nullish collections", () => {
		expect(filter(null, () => true)).toEqual([]);
		expect(filter(undefined, () => true)).toEqual([]);
	});
});
