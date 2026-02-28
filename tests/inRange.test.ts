import { describe, expect, it } from "vitest";
import { inRange } from "../src/inRange";

describe("src/inRange", () => {
	it("checks value in half-open range", () => {
		expect(inRange(3, 2, 4)).toBe(true);
		expect(inRange(4, 2, 4)).toBe(false);
	});

	it("supports omitted end and swapped bounds", () => {
		expect(inRange(2, 4)).toBe(true);
		expect(inRange(3, 4, 2)).toBe(true);
	});
});
