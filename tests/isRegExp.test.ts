import { describe, expect, it } from "vitest";
import { isRegExp } from "../src/isRegExp";

describe("src/isRegExp", () => {
	it("checks regular expressions", () => {
		expect(isRegExp(/a/)).toBe(true);
		expect(isRegExp(/a/i)).toBe(true);
	});

	it("returns false for non-regexp values", () => {
		expect(isRegExp("a")).toBe(false);
		expect(isRegExp({})).toBe(false);
	});
});
