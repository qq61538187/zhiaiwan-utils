import { describe, expect, it } from "vitest";
import { isString } from "../src/isString";

describe("src/isString", () => {
	it("checks string primitives and wrappers", () => {
		expect(isString("abc")).toBe(true);
		expect(isString(new String("abc"))).toBe(true);
	});

	it("returns false for non-string values", () => {
		expect(isString(1)).toBe(false);
		expect(isString(Symbol("x"))).toBe(false);
		expect(isString(null)).toBe(false);
	});
});
