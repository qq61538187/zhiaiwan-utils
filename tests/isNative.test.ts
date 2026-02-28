import { describe, expect, it } from "vitest";
import { isNative } from "../src/isNative";

describe("src/isNative", () => {
	it("detects native functions", () => {
		expect(isNative(Array.prototype.push)).toBe(true);
		expect(isNative(Object.prototype.hasOwnProperty)).toBe(true);
	});

	it("returns false for user functions and non-functions", () => {
		expect(isNative(() => 1)).toBe(false);
		expect(isNative({})).toBe(false);
	});
});
