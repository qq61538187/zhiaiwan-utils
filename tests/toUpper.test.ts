import { describe, expect, it } from "vitest";
import { toUpper } from "../src/toUpper";

describe("src/toUpper", () => {
	it("converts values to uppercase strings", () => {
		expect(toUpper("AbC")).toBe("ABC");
		expect(toUpper()).toBe("");
	});

	it("throws for non-string inputs", () => {
		expect(() => toUpper(123 as never)).toThrow(TypeError);
	});
});
