import { describe, expect, it } from "vitest";
import { toString as toStringFn } from "../src/toString";

describe("src/toString", () => {
	it("converts values to strings", () => {
		expect(toStringFn([1, 2, 3])).toBe("1,2,3");
		expect(toStringFn(null)).toBe("");
		expect(toStringFn(-0)).toBe("-0");
	});

	it("preserves symbol stringification in arrays", () => {
		const value = toStringFn([-0, Symbol("x")]);
		expect(value).toContain("-0");
		expect(value).toContain("Symbol(x)");
	});
});
