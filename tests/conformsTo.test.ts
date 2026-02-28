import { describe, expect, it } from "vitest";
import { conformsTo } from "../src/conformsTo";

describe("src/conformsTo", () => {
	it("returns true when all predicates pass", () => {
		expect(conformsTo({ a: 1, b: 2 }, { a: (v) => v === 1 })).toBe(true);
		expect(
			conformsTo(
				{ a: 1, b: 2 },
				{
					a: (v) => Number(v) > 0,
					b: (v) => Number(v) > 1,
				},
			),
		).toBe(true);
	});

	it("returns false when predicate fails or source value is not function", () => {
		expect(conformsTo({ a: 1 }, { a: (v) => Number(v) > 1 })).toBe(false);
		expect(conformsTo({ a: 1 }, { a: "not-fn" as unknown as (value: unknown) => boolean })).toBe(
			false,
		);
	});
});
