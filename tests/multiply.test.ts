import { describe, expect, it } from "vitest";
import { multiply } from "../src/multiply";

describe("src/multiply", () => {
	it("multiplies values with numeric coercion", () => {
		expect(multiply(3, 7)).toBe(21);
		expect(multiply("3" as never, 2)).toBe(6);
	});
});
