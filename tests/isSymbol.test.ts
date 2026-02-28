import { describe, expect, it } from "vitest";
import { isSymbol } from "../src/isSymbol";

describe("src/isSymbol", () => {
	it("checks symbol primitives and wrappers", () => {
		expect(isSymbol(Symbol("x"))).toBe(true);
		expect(isSymbol(Object(Symbol("x")))).toBe(true);
	});

	it("returns false for non-symbol values", () => {
		expect(isSymbol("x")).toBe(false);
		expect(isSymbol(1)).toBe(false);
		expect(isSymbol(null)).toBe(false);
	});
});
