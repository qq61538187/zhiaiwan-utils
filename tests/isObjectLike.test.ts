import { describe, expect, it } from "vitest";
import { isObjectLike } from "../src/isObjectLike";

describe("src/isObjectLike", () => {
	it("checks object-like values", () => {
		expect(isObjectLike({})).toBe(true);
		expect(isObjectLike([])).toBe(true);
		expect(isObjectLike(new Date())).toBe(true);
	});

	it("returns false for functions and primitives", () => {
		expect(isObjectLike(() => 1)).toBe(false);
		expect(isObjectLike(null)).toBe(false);
		expect(isObjectLike(1)).toBe(false);
	});
});
