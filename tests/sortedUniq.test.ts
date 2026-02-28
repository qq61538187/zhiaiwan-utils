import { describe, expect, it } from "vitest";
import { sortedUniq } from "../src/sortedUniq";

describe("src/sortedUniq", () => {
	it("deduplicates adjacent equal values in sorted array", () => {
		expect(sortedUniq([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
		expect(sortedUniq([])).toEqual([]);
	});
});
