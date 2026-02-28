import { describe, expect, it } from "vitest";
import { isObject } from "../src/isObject";

describe("src/isObject", () => {
	it("checks objects and functions", () => {
		expect(isObject({})).toBe(true);
		expect(isObject([])).toBe(true);
		expect(isObject(() => 1)).toBe(true);
	});

	it("returns false for null and primitives", () => {
		expect(isObject(null)).toBe(false);
		expect(isObject(1)).toBe(false);
		expect(isObject("x")).toBe(false);
	});
});
