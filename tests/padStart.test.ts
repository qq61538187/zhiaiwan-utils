import { describe, expect, it } from "vitest";
import { padStart } from "../src/padStart";

describe("src/padStart", () => {
	it("pads start side to target length", () => {
		expect(padStart("ab", 5)).toBe("   ab");
		expect(padStart("ab", 5, "0")).toBe("000ab");
	});

	it("returns original when target is shorter", () => {
		expect(padStart("abc", 2)).toBe("abc");
	});
});
