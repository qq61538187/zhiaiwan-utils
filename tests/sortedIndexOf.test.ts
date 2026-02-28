import { describe, expect, it } from "vitest";
import { sortedIndexOf } from "../src/sortedIndexOf";

describe("src/sortedIndexOf", () => {
	it("returns first matching index in sorted array", () => {
		expect(sortedIndexOf([1, 2, 2, 3], 2)).toBe(1);
		expect(sortedIndexOf([1, 2, 3], 0)).toBe(-1);
		expect(sortedIndexOf([], 1)).toBe(-1);
	});
});
