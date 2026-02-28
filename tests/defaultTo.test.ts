import { describe, expect, it } from "vitest";
import { defaultTo } from "../src/defaultTo";

describe("src/defaultTo", () => {
	it("returns default for nullish and numeric NaN", () => {
		expect(defaultTo(null, 1)).toBe(1);
		expect(defaultTo(undefined, 1)).toBe(1);
		expect(defaultTo(Number.NaN, 1)).toBe(1);
	});

	it("keeps non-nullish values", () => {
		expect(defaultTo(0, 1)).toBe(0);
		expect(defaultTo("", "x")).toBe("");
		expect(defaultTo(false, true)).toBe(false);
	});
});
