import { describe, expect, it } from "vitest";
import { isInteger } from "../src/isInteger";

describe("src/isInteger", () => {
	it("checks integer numbers", () => {
		expect(isInteger(1)).toBe(true);
		expect(isInteger(-1)).toBe(true);
		expect(isInteger(1.1)).toBe(false);
	});

	it("returns false for non-number inputs", () => {
		expect(isInteger("1")).toBe(false);
		expect(isInteger(Number.NaN)).toBe(false);
	});
});
