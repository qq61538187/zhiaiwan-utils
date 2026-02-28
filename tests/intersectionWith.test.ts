import { describe, expect, it } from "vitest";
import { intersectionWith } from "../src/intersectionWith";

describe("src/intersectionWith", () => {
	it("returns intersection with comparator", () => {
		const comparator = (a: unknown, b: unknown) =>
			Number((a as { x: number }).x) === Number((b as { x: number }).x);
		expect(intersectionWith([{ x: 1 }, { x: 2 }], [{ x: 2 }], comparator)).toEqual([{ x: 2 }]);
	});

	it("uses default comparator when undefined", () => {
		expect(intersectionWith([{ x: 1 }], [{ x: 1 }], undefined)).toEqual([{ x: 1 }]);
	});
});
