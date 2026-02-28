import { describe, expect, it } from "vitest";
import { gt } from "../src/gt";

describe("src/gt", () => {
	it("compares values with greater-than semantics", () => {
		expect(gt(3, 1)).toBe(true);
		expect(gt(1, 3)).toBe(false);
		expect(gt("b", "a")).toBe(true);
	});

	it("follows js relational edge cases", () => {
		expect(gt("10", 2)).toBe(true);
		expect(gt(Number.NaN, 1)).toBe(false);
		expect(gt(undefined, 1)).toBe(false);
	});
});
