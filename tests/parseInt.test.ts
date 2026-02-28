import { describe, expect, it } from "vitest";
import { parseInt as parseIntFn } from "../src/parseInt";

describe("src/parseInt", () => {
	it("parses decimal and hexadecimal strings", () => {
		expect(parseIntFn("08", 10)).toBe(8);
		expect(parseIntFn("0x10")).toBe(16);
	});

	it("trims spaces and normalizes radix", () => {
		expect(parseIntFn("  11  ")).toBe(11);
		expect(parseIntFn("10", 2.9)).toBe(2);
	});
});
