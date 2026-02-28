import { describe, expect, it } from "vitest";
import { flatMapDepth } from "../src/flatMapDepth";

describe("src/flatMapDepth", () => {
	it("maps and flattens with depth control", () => {
		expect(flatMapDepth([1], () => [[[1]]], 1)).toEqual([[1]]);
		expect(flatMapDepth([1], () => [[[1]]], 2)).toEqual([1]);
	});

	it("normalizes depth for fractional and negative values", () => {
		expect(flatMapDepth([1], () => [[1]], 1.8)).toEqual([1]);
		expect(flatMapDepth([1], () => [[1]], -1)).toEqual([[1]]);
	});

	it("returns empty array for nullish collection", () => {
		expect(flatMapDepth(null, () => [1], 1)).toEqual([]);
	});
});
