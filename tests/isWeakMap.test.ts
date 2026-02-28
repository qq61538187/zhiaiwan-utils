import { describe, expect, it } from "vitest";
import { isWeakMap } from "../src/isWeakMap";

describe("src/isWeakMap", () => {
	it("checks WeakMap instances", () => {
		expect(isWeakMap(new WeakMap())).toBe(true);
		expect(isWeakMap(new Map())).toBe(false);
	});

	it("returns false for non-weakmap values", () => {
		expect(isWeakMap({})).toBe(false);
		expect(isWeakMap(null)).toBe(false);
	});
});
