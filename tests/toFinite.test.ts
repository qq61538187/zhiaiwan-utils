import { describe, expect, it } from "vitest";
import { toFinite } from "../src/toFinite";

describe("src/toFinite", () => {
	it("converts values to finite numbers", () => {
		expect(toFinite("3.2")).toBe(3.2);
		expect(toFinite(Number.POSITIVE_INFINITY)).toBe(Number.MAX_SAFE_INTEGER);
		expect(toFinite(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_SAFE_INTEGER);
	});

	it("returns zero for invalid values", () => {
		expect(toFinite(null)).toBe(0);
		expect(toFinite(Number.NaN)).toBe(0);
	});
});
