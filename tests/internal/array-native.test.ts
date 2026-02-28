import { describe, expect, it } from "vitest";
import {
	compact,
	concat,
	drop,
	dropRight,
	findIndex,
	findLastIndex,
	sortedIndexOf,
	sortedLastIndexOf,
	unionWith,
	zipWith,
} from "../../src/internal/array-native";

describe("src/internal/array-native", () => {
	it("handles compact/concat/drop variants", () => {
		expect(compact([0, 1, false, 2, "", 3, null])).toEqual([1, 2, 3]);
		expect(concat([1], 2, [3, 4])).toEqual([1, 2, 3, 4]);
		expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
		expect(dropRight([1, 2, 3], 2)).toEqual([1]);
	});

	it("supports index lookups and sorted lookups", () => {
		expect(findIndex([1, 2, 3], (v: unknown) => Number(v) > 1, 1)).toBe(1);
		expect(findLastIndex([1, 2, 3], (v: unknown) => Number(v) < 3, 1)).toBe(1);
		expect(sortedIndexOf([1, 2, 2, 3], 2)).toBe(1);
		expect(sortedLastIndexOf([1, 2, 2, 3], 2)).toBe(2);
	});

	it("supports unionWith default comparator and zipWith iteratee", () => {
		expect(unionWith([{ x: 1 }], [{ x: 1 }])).toEqual([{ x: 1 }]);
		expect(zipWith([1, 2], [3, 4], (a: unknown, b: unknown) => Number(a) + Number(b))).toEqual([
			4, 6,
		]);
	});
});
