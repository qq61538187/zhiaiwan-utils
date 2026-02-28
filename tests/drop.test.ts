import { describe, expect, it } from "vitest";
import { drop } from "../src/drop";

describe("src/drop", () => {
	it("drops first n elements", () => {
		expect(drop([1, 2, 3], 1)).toEqual([2, 3]);
		expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});

	it("normalizes negative n", () => {
		expect(drop([1, 2], -1)).toEqual([1, 2]);
	});
});
