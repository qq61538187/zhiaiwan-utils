import { describe, expect, it } from "vitest";
import { mean } from "../src/mean";

describe("src/mean", () => {
	it("computes arithmetic mean", () => {
		expect(mean([2, 4, 6])).toBe(4);
	});

	it("returns NaN for empty array", () => {
		expect(Number.isNaN(mean([]))).toBe(true);
	});
});
