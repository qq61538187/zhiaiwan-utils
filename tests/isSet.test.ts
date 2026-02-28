import { describe, expect, it } from "vitest";
import { isSet } from "../src/isSet";

describe("src/isSet", () => {
	it("checks Set instances", () => {
		expect(isSet(new Set())).toBe(true);
		expect(isSet(new Map())).toBe(false);
	});

	it("returns false for non-set values", () => {
		expect(isSet([])).toBe(false);
		expect(isSet({})).toBe(false);
		expect(isSet(null)).toBe(false);
	});
});
