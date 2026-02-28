import { describe, expect, it } from "vitest";
import { isEqualWith } from "../src/isEqualWith";

describe("src/isEqualWith", () => {
	it("uses customizer result when provided", () => {
		expect(
			isEqualWith({ a: 1 }, { a: 2 }, (left, right) =>
				typeof left === "object" && typeof right === "object" ? true : undefined,
			),
		).toBe(true);
	});

	it("falls back to deep equality when customizer returns undefined", () => {
		expect(isEqualWith({ a: 1 }, { a: 2 }, () => undefined)).toBe(false);
	});
});
