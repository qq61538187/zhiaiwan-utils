import { describe, expect, it } from "vitest";
import { toLength } from "../src/toLength";

describe("src/toLength", () => {
	it("normalizes values into valid lengths", () => {
		expect(toLength(3.8)).toBe(3);
		expect(toLength(-1)).toBe(0);
		expect(toLength("2")).toBe(2);
	});

	it("caps lengths at max array length", () => {
		expect(toLength(Number.POSITIVE_INFINITY)).toBe(4294967295);
	});
});
