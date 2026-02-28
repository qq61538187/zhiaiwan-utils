import { describe, expect, it } from "vitest";
import { isEqual } from "../src/isEqual";

describe("src/isEqual", () => {
	it("deep compares values", () => {
		expect(isEqual({ a: [1, 2] }, { a: [1, 2] })).toBe(true);
		expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
	});
});
