import { describe, expect, it } from "vitest";
import { differenceWith } from "../src/differenceWith";

describe("src/differenceWith", () => {
	it("returns difference with comparator", () => {
		expect(
			differenceWith(
				[{ x: 1 }, { x: 2 }],
				[{ x: 1 }],
				(a, b) => Number((a as { x: number }).x) === Number((b as { x: number }).x),
			),
		).toEqual([{ x: 2 }]);
	});

	it("uses default comparator when undefined", () => {
		expect(differenceWith([{ x: 1 }], [{ x: 1 }], undefined)).toEqual([]);
	});
});
