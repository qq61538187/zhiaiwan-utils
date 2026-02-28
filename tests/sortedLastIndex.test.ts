import { describe, expect, it } from "vitest";
import { sortedLastIndex } from "../src/sortedLastIndex";

describe("src/sortedLastIndex", () => {
	it("returns last insertion index for duplicates", () => {
		expect(sortedLastIndex([1, 2, 2, 3], 2)).toBe(3);
		expect(sortedLastIndex([1, 2, 2, 3], 0)).toBe(0);
		expect(sortedLastIndex([], 1)).toBe(0);
	});
});
