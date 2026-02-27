import { describe, expect, it } from "vitest";
import { add } from "../src/add";

describe("add", () => {
	it("returns sum for positive numbers", () => {
		expect(add(1, 2)).toBe(3);
	});

	it("returns sum for negative and positive numbers", () => {
		expect(add(-1, 2)).toBe(1);
	});

	it("handles zero and decimal values", () => {
		expect(add(0, 0)).toBe(0);
		expect(add(0.1, 0.2)).toBeCloseTo(0.3);
	});
});
