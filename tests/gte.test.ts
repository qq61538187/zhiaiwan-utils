import { describe, expect, it } from "vitest";
import { gte } from "../src/gte";

describe("src/gte", () => {
	it("checks greater-than-or-equal comparison", () => {
		expect(gte(3, 2)).toBe(true);
		expect(gte(2, 2)).toBe(true);
		expect(gte(1, 2)).toBe(false);
	});
});
