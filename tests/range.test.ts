import { describe, expect, it } from "vitest";
import { range } from "../src/range";

describe("src/range", () => {
	it("generates ascending and default ranges", () => {
		expect(range(1, 5)).toEqual([1, 2, 3, 4]);
		expect(range(4)).toEqual([0, 1, 2, 3]);
	});

	it("generates descending ranges", () => {
		expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
		expect(range(5, 1)).toEqual([5, 4, 3, 2]);
	});

	it("handles zero and invalid steps", () => {
		expect(range(1, 4, 0)).toEqual([1, 1, 1]);
		expect(range(1, 3, Number.POSITIVE_INFINITY)).toEqual([1, 1]);
	});
});
