import { describe, expect, it } from "vitest";
import { dropRightWhile } from "../src/dropRightWhile";

describe("src/dropRightWhile", () => {
	it("drops from end while predicate is truthy", () => {
		expect(dropRightWhile([1, 2, 3], (v: unknown) => Number(v) > 1)).toEqual([1]);
	});

	it("supports iteratee shorthand", () => {
		expect(dropRightWhile([{ a: 0 }, { a: 1 }], "a")).toEqual([{ a: 0 }]);
	});
});
