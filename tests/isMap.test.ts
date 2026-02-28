import { describe, expect, it } from "vitest";
import { isMap } from "../src/isMap";

describe("src/isMap", () => {
	it("checks Map instances", () => {
		expect(isMap(new Map())).toBe(true);
		expect(isMap(new WeakMap())).toBe(false);
	});

	it("returns false for non-map values", () => {
		expect(isMap({})).toBe(false);
		expect(isMap([])).toBe(false);
	});
});
