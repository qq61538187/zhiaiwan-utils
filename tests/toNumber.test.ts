import { describe, expect, it } from "vitest";
import { toNumber } from "../src/toNumber";

describe("src/toNumber", () => {
	it("converts common values to number", () => {
		expect(toNumber("3.2")).toBe(3.2);
		expect(toNumber("  ")).toBe(0);
		expect(toNumber(true)).toBe(1);
		expect(toNumber({ valueOf: () => 7 })).toBe(7);
	});

	it("returns NaN for symbol", () => {
		expect(Number.isNaN(toNumber(Symbol("x")))).toBe(true);
	});
});
