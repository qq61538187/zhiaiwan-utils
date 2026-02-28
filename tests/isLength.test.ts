import { describe, expect, it } from "vitest";
import { isLength } from "../src/isLength";

describe("src/isLength", () => {
	it("checks valid array-like lengths", () => {
		expect(isLength(0)).toBe(true);
		expect(isLength(3)).toBe(true);
		expect(isLength(3.2)).toBe(false);
	});

	it("rejects negatives and too large values", () => {
		expect(isLength(-1)).toBe(false);
		expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
		expect(isLength("3")).toBe(false);
	});
});
