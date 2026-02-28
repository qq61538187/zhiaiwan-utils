import { describe, expect, it } from "vitest";
import { rangeRight } from "../src/rangeRight";

describe("src/rangeRight", () => {
	it("generates reversed ascending ranges", () => {
		expect(rangeRight(1, 5)).toEqual([4, 3, 2, 1]);
		expect(rangeRight(4)).toEqual([3, 2, 1, 0]);
	});

	it("generates reversed descending ranges", () => {
		expect(rangeRight(5, 1, -1)).toEqual([2, 3, 4, 5]);
		expect(rangeRight(5, 1)).toEqual([2, 3, 4, 5]);
	});

	it("handles zero or invalid step", () => {
		expect(rangeRight(1, 4, 0)).toEqual([1, 1, 1]);
		expect(rangeRight(1, 3, Number.POSITIVE_INFINITY)).toEqual([1, 1]);
	});
});
