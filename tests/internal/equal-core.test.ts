import { describe, expect, it } from "vitest";
import { isEqualCore } from "../../src/internal/equal-core";

describe("src/internal/equal-core", () => {
	it("handles primitive equality with Object.is", () => {
		expect(isEqualCore(1, 1)).toBe(true);
		expect(isEqualCore(Number.NaN, Number.NaN)).toBe(true);
		expect(isEqualCore(1, 2)).toBe(false);
	});

	it("compares arrays deeply", () => {
		expect(isEqualCore([1, [2, 3]], [1, [2, 3]])).toBe(true);
		expect(isEqualCore([1, 2], [1, 2, 3])).toBe(false);
		expect(isEqualCore([1, { x: 1 }], [1, { x: 2 }])).toBe(false);
	});

	it("compares object-like values by right keys", () => {
		expect(isEqualCore({ a: 1, b: 2 }, { a: 1 })).toBe(true);
		expect(isEqualCore({ a: 1 }, { a: 1, b: 2 })).toBe(false);
		expect(isEqualCore({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
	});

	it("returns false for incompatible types", () => {
		expect(isEqualCore({ a: 1 }, [1])).toBe(false);
		expect(isEqualCore(null, {})).toBe(false);
	});
});
