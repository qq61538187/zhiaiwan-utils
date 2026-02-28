import { describe, expect, it } from "vitest";
import { findLastIndex } from "../src/findLastIndex";

describe("src/findLastIndex", () => {
	it("finds last matched index", () => {
		expect(findLastIndex([1, 2, 3, 2], (v: unknown) => Number(v) === 2)).toBe(3);
		expect(findLastIndex([1, 2, 3, 2], (v: unknown) => Number(v) === 2, 2)).toBe(1);
	});

	it("returns -1 for miss", () => {
		expect(findLastIndex([1, 2, 3], (v: unknown) => Number(v) > 3)).toBe(-1);
	});
});
