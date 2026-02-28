import { describe, expect, it } from "vitest";
import { toLower } from "../src/toLower";

describe("src/toLower", () => {
	it("converts values to lowercase strings", () => {
		expect(toLower("AbC")).toBe("abc");
		expect(toLower()).toBe("");
	});

	it("throws for non-string inputs", () => {
		expect(() => toLower(123 as never)).toThrow(TypeError);
	});
});
