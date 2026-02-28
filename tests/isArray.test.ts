import { describe, expect, it } from "vitest";
import { isArray } from "../src/isArray";

describe("src/isArray", () => {
	it("checks array values correctly", () => {
		expect(isArray([])).toBe(true);
		expect(isArray([1, 2])).toBe(true);
		expect(isArray("x")).toBe(false);
		expect(isArray({ length: 1 })).toBe(false);
	});

	it("returns false for array-like non-arrays", () => {
		expect(isArray(new Uint8Array([1, 2]))).toBe(false);
		expect(isArray({ 0: "a", length: 1 })).toBe(false);
	});
});
