import { describe, expect, it } from "vitest";
import { unionWith } from "../src/unionWith";

describe("src/unionWith", () => {
	it("unions values with comparator", () => {
		const source = [{ x: 1 }, { x: 2 }];
		const other = [{ x: 1 }, { x: 3 }];
		expect(
			unionWith(
				source,
				other,
				(a: unknown, b: unknown) =>
					Number((a as { x: number }).x) === Number((b as { x: number }).x),
			),
		).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
	});

	it("uses default deep-like comparator when not provided", () => {
		expect(unionWith([{ x: 1 }], [{ x: 1 }])).toEqual([{ x: 1 }]);
	});
});
