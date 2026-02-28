import { describe, expect, it } from "vitest";
import { toSafeInteger } from "../src/toSafeInteger";

describe("src/toSafeInteger", () => {
	it("converts values to safe integers", () => {
		expect(toSafeInteger(3.8)).toBe(3);
		expect(toSafeInteger(Number.POSITIVE_INFINITY)).toBe(Number.MAX_SAFE_INTEGER);
		expect(toSafeInteger(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_SAFE_INTEGER);
	});

	it("returns zero for invalid values", () => {
		expect(toSafeInteger(Number.NaN)).toBe(0);
	});
});
