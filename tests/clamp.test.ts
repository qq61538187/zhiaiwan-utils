import { describe, expect, it } from "vitest";
import { clamp } from "../src/clamp";

describe("src/clamp", () => {
	it("clamps value within [lower, upper]", () => {
		expect(clamp(12, 0, 10)).toBe(10);
		expect(clamp(-1, 0, 10)).toBe(0);
		expect(clamp(5, 0, 10)).toBe(5);
	});

	it("supports omitted upper and swapped bounds", () => {
		expect(clamp(12, 10)).toBe(10);
		expect(clamp(-1, 10)).toBe(0);
		expect(clamp(3, 10, 0)).toBe(3);
	});

	it("coerces numeric inputs", () => {
		expect(clamp("8" as unknown as number, "0" as never, "5" as never)).toBe(5);
	});
});
