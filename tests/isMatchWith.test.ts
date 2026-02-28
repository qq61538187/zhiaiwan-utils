import { describe, expect, it } from "vitest";
import { isMatchWith } from "../src/isMatchWith";

describe("src/isMatchWith", () => {
	it("uses customizer and key context", () => {
		expect(
			isMatchWith({ a: 1, b: "2" }, { a: 1, b: 2 }, (objValue, srcValue, key) =>
				key === "b" ? Number(objValue) === Number(srcValue) : undefined,
			),
		).toBe(true);
	});

	it("falls back to deep equality per key", () => {
		expect(isMatchWith({ a: 1 }, { a: 2 }, () => undefined)).toBe(false);
	});
});
