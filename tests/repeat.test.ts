import { describe, expect, it } from "vitest";
import { repeat } from "../src/repeat";

describe("src/repeat", () => {
	it("repeats string by count", () => {
		expect(repeat("ab", 2)).toBe("abab");
		expect(repeat("ab", 0)).toBe("");
	});

	it("normalizes negative and fractional counts", () => {
		expect(repeat("ab", -1)).toBe("");
		expect(repeat("ab", 1.8)).toBe("ab");
	});
});
