import { describe, expect, it } from "vitest";
import { min } from "../src/min";

describe("src/min", () => {
	it("returns min value or undefined for empty array", () => {
		expect(min([3, 8, 1])).toBe(1);
		expect(min([])).toBeUndefined();
	});
});
