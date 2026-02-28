import { describe, expect, it } from "vitest";
import { isNaN as isNaNFn } from "../src/isNaN";

describe("src/isNaN", () => {
	it("checks only numeric NaN values", () => {
		expect(isNaNFn(Number.NaN)).toBe(true);
		expect(isNaNFn(1)).toBe(false);
		expect(isNaNFn(Number("x"))).toBe(true);
	});

	it("returns false for non-number inputs", () => {
		expect(isNaNFn("NaN")).toBe(false);
		expect(isNaNFn(undefined)).toBe(false);
		expect(isNaNFn(new Number(Number.NaN))).toBe(false);
	});
});
