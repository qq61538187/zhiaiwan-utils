import { describe, expect, it } from "vitest";
import { ceil } from "../src/ceil";

describe("src/ceil", () => {
	it("rounds up with precision", () => {
		expect(ceil(4.006, 2)).toBe(4.01);
		expect(ceil(4060, -2)).toBe(4100);
	});
});
