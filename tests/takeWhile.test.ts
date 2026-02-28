import { describe, expect, it } from "vitest";
import { takeWhile } from "../src/takeWhile";

describe("src/takeWhile", () => {
	it("takes from start while predicate is truthy", () => {
		expect(takeWhile([1, 2, 3], (v: unknown) => Number(v) < 3)).toEqual([1, 2]);
	});

	it("supports iteratee shorthand", () => {
		expect(takeWhile([{ a: 1 }, { a: 0 }], "a")).toEqual([{ a: 1 }]);
	});
});
