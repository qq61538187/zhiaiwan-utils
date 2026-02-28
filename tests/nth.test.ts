import { describe, expect, it } from "vitest";
import { nth } from "../src/nth";

describe("src/nth", () => {
	it("gets nth element by positive or negative index", () => {
		expect(nth([1, 2, 3], 1)).toBe(2);
		expect(nth([1, 2, 3], -1)).toBe(3);
	});

	it("returns undefined when out of bounds", () => {
		expect(nth([1, 2], 10)).toBeUndefined();
	});
});
