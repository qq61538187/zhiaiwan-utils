import { describe, expect, it } from "vitest";
import { sortedLastIndexOf } from "../src/sortedLastIndexOf";

describe("src/sortedLastIndexOf", () => {
	it("returns last matching index in sorted array", () => {
		expect(sortedLastIndexOf([1, 2, 2, 3], 2)).toBe(2);
		expect(sortedLastIndexOf([1, 2, 3], 0)).toBe(-1);
		expect(sortedLastIndexOf([], 1)).toBe(-1);
	});
});
