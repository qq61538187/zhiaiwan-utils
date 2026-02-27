import { describe, expect, it } from "vitest";
import {
	compact,
	first,
	flatten,
	flattenDeep,
	head,
	intersection,
	last,
	take,
	union,
	unionBy,
	unionWith,
	uniq,
	uniqBy,
	without,
	xorBy,
	xorWith,
	zip,
} from "../src/index";

describe("array extra methods", () => {
	it("supports flatten and flattenDeep", () => {
		expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]);
		expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
	});

	it("supports intersection across arrays", () => {
		expect(intersection([2, 1], [2, 3], [2, 4])).toEqual([2]);
	});

	it("supports union across arrays", () => {
		expect(union([2], [1, 2], [3])).toEqual([2, 1, 3]);
	});

	it("supports compact, head/first, last, take, uniq, without, zip (method wrappers)", () => {
		expect(compact([0, 1, 2, null, undefined])).toEqual([1, 2]);
		expect(head([1, 2, 3])).toBe(1);
		expect(first([1, 2, 3])).toBe(1);
		expect(last([1, 2, 3])).toBe(3);
		expect(take([1, 2, 3], 2)).toEqual([1, 2]);
		expect(uniq([1, 1, 2, 2])).toEqual([1, 2]);
		expect(without([1, 2, 3], 2)).toEqual([1, 3]);
		expect(zip([1, 2], ["a", "b"])).toEqual([
			[1, "a"],
			[2, "b"],
		]);
	});

	it("supports variadic unionBy/unionWith and xorBy/xorWith", () => {
		expect(unionBy([2.1], [1.2, 2.3], [3.4], Math.floor)).toEqual([
			2.1, 1.2, 3.4,
		]);
		expect(
			unionWith(
				[{ x: 1, y: 2 }],
				[{ x: 2, y: 1 }],
				[{ x: 1, y: 2 }],
				(a: { x: number; y: number }, b: { x: number; y: number }) =>
					a.x === b.x && a.y === b.y,
			),
		).toEqual([
			{ x: 1, y: 2 },
			{ x: 2, y: 1 },
		]);
		expect(xorBy([2.1, 1.2], [2.3, 3.4], [1.8], Math.floor)).toEqual([3.4]);
		expect(
			xorWith(
				[{ x: 1, y: 2 }],
				[{ x: 2, y: 1 }],
				[{ x: 1, y: 2 }],
				(a: { x: number; y: number }, b: { x: number; y: number }) =>
					a.x === b.x && a.y === b.y,
			),
		).toEqual([{ x: 2, y: 1 }]);
	});

	it("supports uniqBy compatibility", () => {
		expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
	});
});
