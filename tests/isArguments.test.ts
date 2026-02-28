import { describe, expect, it } from "vitest";
import { isArguments } from "../src/isArguments";

describe("src/isArguments", () => {
	it("identifies arguments-like values", () => {
		const argsValue = { [Symbol.toStringTag]: "Arguments" };
		expect(isArguments(argsValue)).toBe(true);
		expect(isArguments([])).toBe(false);
		expect(isArguments({})).toBe(false);
	});

	it("returns false for other tagged objects", () => {
		const mapLike = { [Symbol.toStringTag]: "Map" };
		expect(isArguments(mapLike)).toBe(false);
	});
});
