import { describe, expect, it } from "vitest";
import { clamp, inRange, random } from "../src/index";

describe("number methods", () => {
	it("clamp constrains number within bounds", () => {
		expect(clamp(-10, -5, 5)).toBe(-5);
		expect(clamp(10, -5, 5)).toBe(5);
		expect(clamp(0, -5, 5)).toBe(0);
	});

	it("inRange checks if number is in range", () => {
		expect(inRange(3, 0, 5)).toBe(true);
		expect(inRange(5, 0, 5)).toBe(false);
		expect(inRange(0, 0, 5)).toBe(true);
	});

	it("random returns number within range", () => {
		const r = random(0, 10);
		expect(r).toBeGreaterThanOrEqual(0);
		expect(r).toBeLessThanOrEqual(10);
		expect(Number.isInteger(r)).toBe(true);
	});
});
