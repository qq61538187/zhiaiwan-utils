import { describe, expect, it } from "vitest";
import { isNil } from "../src/isNil";

describe("src/isNil", () => {
	it("checks nullish values", () => {
		expect(isNil(null)).toBe(true);
		expect(isNil(undefined)).toBe(true);
	});

	it("returns false for non-nullish values", () => {
		expect(isNil(0)).toBe(false);
		expect(isNil("")).toBe(false);
		expect(isNil(false)).toBe(false);
	});
});
