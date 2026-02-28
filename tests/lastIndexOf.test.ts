import { describe, expect, it } from "vitest";
import { lastIndexOf } from "../src/lastIndexOf";

describe("src/lastIndexOf", () => {
	it("finds last matching index", () => {
		expect(lastIndexOf([1, 2, 1], 1)).toBe(0);
		expect(lastIndexOf([1, 2, 1], 1, 1)).toBe(0);
	});

	it("returns -1 for missing values", () => {
		expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
	});
});
