import { describe, expect, it } from "vitest";
import { pullAllWith } from "../src/pullAllWith";

describe("src/pullAllWith", () => {
	it("removes with comparator", () => {
		const source = [{ x: 1 }, { x: 2 }, { x: 1 }];
		expect(
			pullAllWith(
				source,
				[{ x: 1 }],
				(a, b) => Number((a as { x: number }).x) === Number((b as { x: number }).x),
			),
		).toEqual([{ x: 2 }]);
		expect(source).toEqual([{ x: 2 }]);
	});
});
