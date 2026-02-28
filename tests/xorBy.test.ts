import { describe, expect, it } from "vitest";
import { xorBy } from "../src/xorBy";

describe("src/xorBy", () => {
	it("returns symmetric difference by iteratee", () => {
		expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2, 3.4]);
		expect(xorBy()).toEqual([]);
	});
});
