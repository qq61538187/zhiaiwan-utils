import { describe, expect, it } from "vitest";
import { includes } from "../src/includes";

describe("src/includes", () => {
	it("checks arrays and object collections", () => {
		expect(includes([1, 2, 3], 2)).toBe(true);
		expect(includes({ a: 1, b: 2 }, 2)).toBe(true);
		expect(includes([1, 2, 3], 2, 2)).toBe(false);
	});

	it("supports string and negative fromIndex", () => {
		expect(includes("abcd", "bc")).toBe(true);
		expect(includes("abcd", "ab", 1)).toBe(false);
		expect(includes([1, 2, 3], 2, -2)).toBe(true);
	});

	it("handles NaN and nullish collections", () => {
		expect(includes([1, Number.NaN], Number.NaN)).toBe(true);
		expect(includes(null, 1)).toBe(false);
		expect(includes(undefined, 1)).toBe(false);
	});
});
