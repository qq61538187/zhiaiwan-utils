import { describe, expect, it } from "vitest";
import { round } from "../src/round";

describe("src/round", () => {
	it("rounds with precision", () => {
		expect(round(4.006, 2)).toBe(4.01);
		expect(round(4060, -2)).toBe(4100);
	});
});
