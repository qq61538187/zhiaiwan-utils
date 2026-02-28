import { describe, expect, it } from "vitest";
import { isFunction } from "../src/isFunction";

describe("src/isFunction", () => {
	it("checks callable values", () => {
		expect(isFunction(() => 1)).toBe(true);
		expect(isFunction(function named() {})).toBe(true);
		expect(isFunction(class A {})).toBe(true);
	});

	it("returns false for non-functions", () => {
		expect(isFunction({})).toBe(false);
		expect(isFunction(null)).toBe(false);
	});
});
