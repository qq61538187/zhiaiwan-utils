import { describe, expect, it } from "vitest";
import { eq } from "../src/eq";

describe("src/eq", () => {
	it("compares with SameValueZero semantics", () => {
		expect(eq(1, 1)).toBe(true);
		expect(eq(Number.NaN, Number.NaN)).toBe(true);
		expect(eq(1, "1")).toBe(false);
	});
});
