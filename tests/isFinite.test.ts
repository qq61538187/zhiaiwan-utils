import { describe, expect, it } from "vitest";
import { isFinite as isFiniteFn } from "../src/isFinite";

describe("src/isFinite", () => {
	it("checks finite primitive numbers only", () => {
		expect(isFiniteFn(1)).toBe(true);
		expect(isFiniteFn(1.2)).toBe(true);
		expect(isFiniteFn(Number.POSITIVE_INFINITY)).toBe(false);
		expect(isFiniteFn(Number.NaN)).toBe(false);
	});

	it("returns false for non-number values", () => {
		expect(isFiniteFn("1")).toBe(false);
		expect(isFiniteFn(new Number(1))).toBe(false);
	});
});
