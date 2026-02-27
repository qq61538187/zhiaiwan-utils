import { describe, expect, it } from "vitest";
import {
	add,
	chunk,
	cloneDeep,
	compact,
	conformsTo,
	create,
	difference,
	groupBy,
	isEqual,
	words,
} from "../src/index";

describe("examples smoke", () => {
	it("covers core arithmetic/array examples", () => {
		expect(add(4, 6)).toBe(10);
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
		expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
		expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
	});

	it("covers object/lang examples", () => {
		const proto = { a: 1 };
		const obj = create(proto);
		expect(Object.getPrototypeOf(obj)).toBe(proto);

		expect(conformsTo({ a: 1 }, { a: (value) => value === 1 })).toBe(true);
		expect(isEqual(cloneDeep({ a: { b: 1 } }), { a: { b: 1 } })).toBe(true);
	});

	it("covers collection/string examples", () => {
		expect(groupBy(["one", "two", "three"], "length")).toEqual({
			3: ["one", "two"],
			5: ["three"],
		});
		expect(words("foo bar-baz")).toEqual(["foo", "bar", "baz"]);
	});
});
