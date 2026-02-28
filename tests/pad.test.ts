import { describe, expect, it } from "vitest";
import { pad } from "../src/pad";

describe("src/pad", () => {
	it("pads both sides to target length", () => {
		expect(pad("ab", 5)).toBe(" ab  ");
		expect(pad("ab", 5, "0")).toBe("0ab00");
	});

	it("returns original when already long enough", () => {
		expect(pad("abc", 2)).toBe("abc");
	});
});
