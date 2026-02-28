import { describe, expect, it } from "vitest";
import { findIndex } from "../src/findIndex";

describe("src/findIndex", () => {
	it("finds first matched index", () => {
		expect(findIndex([1, 2, 3], (v: unknown) => Number(v) > 1)).toBe(1);
		expect(findIndex([1, 2, 3], (v: unknown) => Number(v) > 1, 2)).toBe(2);
	});

	it("returns -1 for miss and clamps negative fromIndex", () => {
		expect(findIndex([1, 2, 3], (v: unknown) => Number(v) > 3)).toBe(-1);
		expect(findIndex([1, 2, 3], (v: unknown) => Number(v) === 1, -2)).toBe(0);
	});
});
