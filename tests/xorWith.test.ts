import { describe, expect, it } from "vitest";
import { xorWith } from "../src/xorWith";

describe("src/xorWith", () => {
	it("returns symmetric difference with comparator", () => {
		const comparator = (a: unknown, b: unknown) =>
			Number((a as { x: number }).x) === Number((b as { x: number }).x);
		expect(xorWith([{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }], comparator)).toEqual([
			{ x: 1 },
			{ x: 3 },
		]);
	});
});
