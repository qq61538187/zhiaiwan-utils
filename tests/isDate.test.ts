import { describe, expect, it } from "vitest";
import { isDate } from "../src/isDate";

describe("src/isDate", () => {
	it("checks Date instances", () => {
		expect(isDate(new Date())).toBe(true);
		expect(isDate(new Date("invalid"))).toBe(true);
	});

	it("returns false for non-Date values", () => {
		expect(isDate(Date.now())).toBe(false);
		expect(isDate("2020-01-01")).toBe(false);
	});
});
