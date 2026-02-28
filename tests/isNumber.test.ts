import { describe, expect, it } from "vitest";
import { isNumber } from "../src/isNumber";

describe("src/isNumber", () => {
	it("checks number primitives and wrappers", () => {
		expect(isNumber(1)).toBe(true);
		expect(isNumber(Number.NaN)).toBe(true);
		expect(isNumber(new Number(1))).toBe(true);
	});

	it("returns false for non-number values", () => {
		expect(isNumber("1")).toBe(false);
		expect(isNumber(null)).toBe(false);
	});
});
