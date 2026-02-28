import { describe, expect, it } from "vitest";
import { indexOf } from "../src/indexOf";

describe("src/indexOf", () => {
	it("finds first matching index", () => {
		expect(indexOf([1, 2, 3], 2)).toBe(1);
		expect(indexOf([1, 2, 3], 4)).toBe(-1);
	});

	it("supports fromIndex and truncates it", () => {
		expect(indexOf([1, 2, 1], 1, 1)).toBe(2);
		expect(indexOf([1, 2, 1], 1, 1.9)).toBe(2);
		expect(indexOf([1, 2, 1], 1, -1)).toBe(2);
	});
});
