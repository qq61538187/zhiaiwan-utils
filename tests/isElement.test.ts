import { describe, expect, it } from "vitest";
import { isElement } from "../src/isElement";

describe("src/isElement", () => {
	it("checks element-like node objects", () => {
		expect(isElement({ nodeType: 1 })).toBe(true);
		expect(isElement({ nodeType: 2 })).toBe(false);
	});

	it("returns false for nullish and primitives", () => {
		expect(isElement(null)).toBe(false);
		expect(isElement("div")).toBe(false);
	});
});
