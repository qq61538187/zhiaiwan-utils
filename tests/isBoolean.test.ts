import { describe, expect, it } from "vitest";
import { isBoolean } from "../src/isBoolean";

describe("src/isBoolean", () => {
	it("checks boolean primitives and wrapper objects", () => {
		expect(isBoolean(true)).toBe(true);
		expect(isBoolean(false)).toBe(true);
		expect(isBoolean(new Boolean(true))).toBe(true);
	});

	it("returns false for non-boolean values", () => {
		expect(isBoolean(1)).toBe(false);
		expect(isBoolean("true")).toBe(false);
		expect(isBoolean(null)).toBe(false);
	});
});
