import { describe, expect, it } from "vitest";
import { chunk } from "../src/chunk";

describe("src/chunk", () => {
	it("splits array by chunk size", () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
		expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
	});

	it("returns empty for invalid size", () => {
		expect(chunk([1, 2], 0)).toEqual([]);
		expect(chunk([1, 2], Number.POSITIVE_INFINITY)).toEqual([]);
	});
});
