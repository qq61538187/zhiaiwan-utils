import { describe, expect, it } from "vitest";
import { conforms } from "../src/conforms";

describe("src/conforms", () => {
	it("creates predicate that checks all source predicates", () => {
		const matcher = conforms({
			a: (v) => Number(v) > 0,
			b: (v) => v === "x",
		});
		expect(matcher({ a: 1, b: "x" })).toBe(true);
		expect(matcher({ a: 0, b: "x" })).toBe(false);
	});

	it("returns false for nullish input", () => {
		const matcher = conforms({ a: (v) => Number(v) > 0 });
		expect(matcher(null)).toBe(false);
		expect(matcher(undefined)).toBe(false);
	});
});
