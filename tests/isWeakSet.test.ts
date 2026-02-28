import { describe, expect, it } from "vitest";
import { isWeakSet } from "../src/isWeakSet";

describe("src/isWeakSet", () => {
	it("checks WeakSet instances", () => {
		expect(isWeakSet(new WeakSet())).toBe(true);
		expect(isWeakSet(new Set())).toBe(false);
	});

	it("returns false for non-weakset values", () => {
		expect(isWeakSet([])).toBe(false);
		expect(isWeakSet(null)).toBe(false);
	});
});
