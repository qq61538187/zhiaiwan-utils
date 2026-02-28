import { describe, expect, it } from "vitest";
import { takeRightWhile } from "../src/takeRightWhile";

describe("src/takeRightWhile", () => {
	it("takes from end while predicate is truthy", () => {
		expect(takeRightWhile([1, 2, 3], (v: unknown) => Number(v) > 1)).toEqual([2, 3]);
	});

	it("supports iteratee shorthand", () => {
		expect(takeRightWhile([{ a: 0 }, { a: 1 }], "a")).toEqual([{ a: 1 }]);
	});
});
