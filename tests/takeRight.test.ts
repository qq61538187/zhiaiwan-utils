import { describe, expect, it } from "vitest";
import { takeRight } from "../src/takeRight";

describe("src/takeRight", () => {
	it("takes last n elements", () => {
		expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
		expect(takeRight([1, 2, 3], 0)).toEqual([]);
	});

	it("returns full array when n is larger", () => {
		expect(takeRight([1, 2], 3)).toEqual([1, 2]);
	});
});
