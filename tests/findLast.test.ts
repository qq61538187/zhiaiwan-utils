import { describe, expect, it } from "vitest";
import { findLast } from "../src/findLast";

describe("src/findLast", () => {
	it("finds last matched value", () => {
		expect(findLast([1, 2, 3, 2], (v: unknown) => Number(v) === 2)).toBe(2);
		expect(findLast({ a: 1, b: 2, c: 3 }, (v: unknown) => Number(v) > 1)).toBe(3);
	});

	it("returns undefined for misses and nullish", () => {
		expect(findLast([1, 2], (v: unknown) => Number(v) > 3)).toBeUndefined();
		expect(findLast(undefined, () => true)).toBeUndefined();
	});
});
