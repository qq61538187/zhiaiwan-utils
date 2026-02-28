import { describe, expect, it } from "vitest";
import { zipWith } from "../src/zipWith";

describe("src/zipWith", () => {
	it("zips and combines with iteratee", () => {
		expect(zipWith([1, 2], [10, 20], (a, b) => Number(a) + Number(b))).toEqual([11, 22]);
	});
});
