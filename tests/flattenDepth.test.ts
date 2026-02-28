import { describe, expect, it } from "vitest";
import { flattenDepth } from "../src/flattenDepth";

describe("src/flattenDepth", () => {
	it("flattens to specified depth", () => {
		expect(flattenDepth([1, [2, [3]]], 1)).toEqual([1, 2, [3]]);
		expect(flattenDepth([1, [2, [3]]], 2)).toEqual([1, 2, 3]);
	});

	it("normalizes negative depth", () => {
		expect(flattenDepth([1, [2]], -1)).toEqual([1, [2]]);
	});
});
