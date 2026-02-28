import { describe, expect, it } from "vitest";
import { sortedIndex } from "../src/sortedIndex";

describe("src/sortedIndex", () => {
	it("returns insertion index in sorted array", () => {
		expect(sortedIndex([1, 2, 4], 3)).toBe(2);
		expect(sortedIndex([1, 2, 4], 0)).toBe(0);
		expect(sortedIndex([], 1)).toBe(0);
	});
});
