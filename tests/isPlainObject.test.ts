import { describe, expect, it } from "vitest";
import { isPlainObject } from "../src/isPlainObject";

describe("src/isPlainObject", () => {
	it("checks plain objects", () => {
		expect(isPlainObject({ a: 1 })).toBe(true);
		expect(isPlainObject(Object.create(null))).toBe(true);
	});

	it("returns false for arrays and class instances", () => {
		class A {}
		expect(isPlainObject([])).toBe(false);
		expect(isPlainObject(new A())).toBe(false);
		expect(isPlainObject(null)).toBe(false);
	});
});
