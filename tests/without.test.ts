import { describe, expect, it } from "vitest";
import { without } from "../src/without";

describe("src/without", () => {
	it("creates array excluding given values", () => {
		expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
		expect(without([1, Number.NaN], Number.NaN)).toEqual([1]);
	});
});
