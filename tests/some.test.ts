import { describe, expect, it } from "vitest";
import { some } from "../src/some";

describe("src/some", () => {
	it("returns true when any element matches", () => {
		expect(some([1, 2, 3], (v: unknown) => Number(v) > 2)).toBe(true);
		expect(some([1, 2], (v: unknown) => Number(v) > 2)).toBe(false);
	});

	it("supports object collection and nullish", () => {
		expect(some({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1)).toBe(true);
		expect(some(null, () => true)).toBe(false);
	});
});
