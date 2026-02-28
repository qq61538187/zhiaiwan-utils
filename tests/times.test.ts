import { describe, expect, it } from "vitest";
import { times } from "../src/times";

describe("src/times", () => {
	it("invokes iteratee with indices", () => {
		expect(times(3, String)).toEqual(["0", "1", "2"]);
		expect(times(3, (index) => index * 2)).toEqual([0, 2, 4]);
	});

	it("normalizes n for negative/fractional/non-finite", () => {
		expect(times(-1, String)).toEqual([]);
		expect(times(2.8, String)).toEqual(["0", "1"]);
		expect(times(Number.POSITIVE_INFINITY, String)).toEqual([]);
	});

	it("uses identity-like default iteratee", () => {
		expect(times(2)).toEqual([0, 1]);
	});
});
