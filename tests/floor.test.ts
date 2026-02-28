import { describe, expect, it } from "vitest";
import { floor } from "../src/floor";

describe("src/floor", () => {
	it("rounds down with precision", () => {
		expect(floor(4.006, 2)).toBe(4);
		expect(floor(4060, -2)).toBe(4000);
	});
});
