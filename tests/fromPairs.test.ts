import { describe, expect, it } from "vitest";
import { fromPairs } from "../src/fromPairs";

describe("src/fromPairs", () => {
	it("converts pairs array to object", () => {
		expect(
			fromPairs([
				["a", 1],
				["b", 2],
			]),
		).toEqual({ a: 1, b: 2 });
		expect(fromPairs([])).toEqual({});
	});

	it("overwrites duplicate keys with later values", () => {
		expect(
			fromPairs([
				["a", 1],
				["a", 2],
			]),
		).toEqual({ a: 2 });
	});
});
