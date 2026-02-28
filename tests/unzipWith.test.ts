import { describe, expect, it } from "vitest";
import { unzipWith } from "../src/unzipWith";

describe("src/unzipWith", () => {
	it("unzips and combines by iteratee", () => {
		expect(
			unzipWith(
				[
					[1, 10],
					[2, 20],
				],
				(a, b) => Number(a) + Number(b),
			),
		).toEqual([3, 30]);
	});

	it("returns unzipped groups without iteratee", () => {
		expect(unzipWith([[1, 2]])).toEqual([[1], [2]]);
	});
});
