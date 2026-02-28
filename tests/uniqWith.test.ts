import { describe, expect, it } from "vitest";
import { uniqWith } from "../src/uniqWith";

describe("src/uniqWith", () => {
	it("deduplicates with comparator", () => {
		expect(
			uniqWith(
				[{ x: 1 }, { x: 1 }, { x: 2 }],
				(a, b) => Number((a as { x: number }).x) === Number((b as { x: number }).x),
			),
		).toEqual([{ x: 1 }, { x: 2 }]);
	});

	it("uses default comparator when undefined", () => {
		expect(uniqWith([{ x: 1 }, { x: 1 }], undefined)).toEqual([{ x: 1 }]);
	});
});
