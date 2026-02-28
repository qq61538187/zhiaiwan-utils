import { describe, expect, it } from "vitest";
import { invert } from "../src/invert";

describe("src/invert", () => {
	it("inverts object keys and values", () => {
		expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ 1: "c", 2: "b" });
	});

	it("returns empty object for nullish", () => {
		expect(invert(null)).toEqual({});
	});
});
