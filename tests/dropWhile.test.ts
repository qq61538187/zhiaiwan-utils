import { describe, expect, it } from "vitest";
import { dropWhile } from "../src/dropWhile";

describe("src/dropWhile", () => {
	it("drops from start while predicate is truthy", () => {
		expect(dropWhile([1, 2, 3], (v: unknown) => Number(v) < 3)).toEqual([3]);
	});

	it("supports iteratee shorthand", () => {
		expect(dropWhile([{ a: 1 }, { a: 0 }], "a")).toEqual([{ a: 0 }]);
	});
});
