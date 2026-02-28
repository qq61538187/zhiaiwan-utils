import { describe, expect, it } from "vitest";
import { toInteger } from "../src/toInteger";

describe("src/toInteger", () => {
	it("truncates finite numbers toward zero", () => {
		expect(toInteger(3.8)).toBe(3);
		expect(toInteger(-3.8)).toBe(-3);
		expect(toInteger("2.9")).toBe(2);
	});

	it("clamps infinities and invalid values", () => {
		expect(toInteger(Number.POSITIVE_INFINITY)).toBe(Number.MAX_SAFE_INTEGER);
		expect(toInteger(Number.NaN)).toBe(0);
	});
});
