import { describe, expect, it } from "vitest";
import { padEnd } from "../src/padEnd";

describe("src/padEnd", () => {
	it("pads end side to target length", () => {
		expect(padEnd("ab", 5)).toBe("ab   ");
		expect(padEnd("ab", 5, "0")).toBe("ab000");
	});

	it("returns original when target is shorter", () => {
		expect(padEnd("abc", 2)).toBe("abc");
	});
});
