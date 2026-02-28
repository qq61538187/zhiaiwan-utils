import { describe, expect, it } from "vitest";
import { max } from "../src/max";

describe("src/max", () => {
	it("returns max value or undefined for empty array", () => {
		expect(max([3, 8, 1])).toBe(8);
		expect(max([])).toBeUndefined();
	});
});
