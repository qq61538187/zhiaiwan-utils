import { describe, expect, it } from "vitest";
import { take } from "../src/take";

describe("src/take", () => {
	it("takes first n elements", () => {
		expect(take([1, 2, 3], 2)).toEqual([1, 2]);
		expect(take([1, 2, 3], 0)).toEqual([]);
	});

	it("normalizes negative n", () => {
		expect(take([1, 2], -1)).toEqual([]);
	});
});
