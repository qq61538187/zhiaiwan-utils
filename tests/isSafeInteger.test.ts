import { describe, expect, it } from "vitest";
import { isSafeInteger } from "../src/isSafeInteger";

describe("src/isSafeInteger", () => {
	it("checks safe integer boundaries", () => {
		expect(isSafeInteger(1)).toBe(true);
		expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
		expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
	});

	it("returns false for non-integers or non-numbers", () => {
		expect(isSafeInteger(1.2)).toBe(false);
		expect(isSafeInteger("1")).toBe(false);
	});
});
