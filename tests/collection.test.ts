import { describe, expect, it } from "vitest";
import {
	countBy,
	each,
	every,
	filter,
	find,
	flatMap,
	forEach,
	groupBy,
	includes,
	keyBy,
	map,
	orderBy,
	partition,
	reduce,
	reject,
	shuffle,
	size,
	some,
	sortBy,
} from "../src/index";

describe("collection methods", () => {
	it("supports map and filter", () => {
		expect(map([{ n: 1 }, { n: 2 }], "n")).toEqual([1, 2]);
		expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
	});

	it("supports reduce", () => {
		expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
	});

	it("supports groupBy and keyBy", () => {
		expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			"4": [4.2],
			"6": [6.1, 6.3],
		});
		expect(
			keyBy(
				[
					{ id: "a", value: 1 },
					{ id: "b", value: 2 },
				],
				"id",
			),
		).toEqual({
			a: { id: "a", value: 1 },
			b: { id: "b", value: 2 },
		});
	});

	it("supports countBy/every/some", () => {
		expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			"4": 1,
			"6": 2,
		});
		expect(every([1, 2, 3], (n) => n > 0)).toBe(true);
		expect(every([1, 0, 3])).toBe(false);
		expect(some([0, null, "ok"])).toBe(true);
		expect(some([0, null, false])).toBe(false);
	});

	it("supports includes and size", () => {
		expect(includes([1, 2, 3], 1)).toBe(true);
		expect(includes([1, 2, 3], 1, 1)).toBe(false);
		expect(includes([1, 2, 3], 3, -1)).toBe(true);
		expect(includes({ a: 1, b: 2 }, 2)).toBe(true);
		expect(includes("abcd", "bc")).toBe(true);
		expect(size([1, 2, 3])).toBe(3);
		expect(size({ a: 1, b: 2 })).toBe(2);
		expect(size("abc")).toBe(3);
		expect(size(null)).toBe(0);
	});

	it("supports find, flatMap, forEach/each, partition, reject, shuffle, sortBy (method wrappers)", () => {
		expect(find([{ n: 1 }, { n: 2 }], (x: { n: number }) => x.n === 2)).toEqual(
			{ n: 2 },
		);
		expect(flatMap([1, 2], (x: number) => [x, x])).toEqual([1, 1, 2, 2]);
		const eachCollected: number[] = [];
		forEach([1, 2], (v: number) => eachCollected.push(v));
		expect(eachCollected).toEqual([1, 2]);
		const eachAliasCollected: number[] = [];
		each([1, 2], (v: number) => eachAliasCollected.push(v));
		expect(eachAliasCollected).toEqual([1, 2]);
		expect(partition([1, 2, 3, 4], (n: number) => n % 2 === 0)).toEqual([
			[2, 4],
			[1, 3],
		]);
		expect(reject([1, 2, 3, 4], (n: number) => n % 2 === 0)).toEqual([1, 3]);
		const arr = [1, 2, 3];
		const shuf = shuffle(arr);
		expect(shuf.sort()).toEqual([1, 2, 3]);
		expect(sortBy([{ n: 2 }, { n: 1 }], "n")).toEqual([{ n: 1 }, { n: 2 }]);
	});

	it("keeps iteratee shorthand behavior across find/filter/orderBy", () => {
		const users = [
			{ user: "barney", age: 36, active: true },
			{ user: "fred", age: 40, active: false },
			{ user: "pebbles", age: 1, active: true },
		];
		expect(find(users, { age: 1, active: true })).toEqual(users[2]);
		expect(filter(users, ["active", true] as const)).toEqual([
			users[0],
			users[2],
		]);
		expect(map(users, "user")).toEqual(["barney", "fred", "pebbles"]);
		expect(orderBy(users, ["user"], ["desc"]).map((o) => o.user)).toEqual([
			"pebbles",
			"fred",
			"barney",
		]);
	});
});
