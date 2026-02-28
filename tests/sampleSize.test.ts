import { describe, expect, it, vi } from "vitest";
import { sampleSize } from "../src/sampleSize";

describe("src/sampleSize", () => {
	it("returns n sampled elements", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0);
		expect(sampleSize([1, 2, 3], 2)).toEqual([2, 3]);
		spy.mockRestore();
	});

	it("normalizes n and nullish input", () => {
		expect(sampleSize([1, 2], -1)).toEqual([]);
		expect(sampleSize(null, 2)).toEqual([]);
	});
});
