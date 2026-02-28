import { describe, expect, it } from "vitest";
import { startsWith } from "../src/startsWith";

describe("src/startsWith", () => {
	it("checks prefix with optional position", () => {
		expect(startsWith("abc", "a")).toBe(true);
		expect(startsWith("abc", "b", 1)).toBe(true);
		expect(startsWith("abc", "a", 1)).toBe(false);
	});

	it("normalizes negative position", () => {
		expect(startsWith("abc", "a", -1)).toBe(true);
	});
});
