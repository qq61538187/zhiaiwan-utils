import { describe, expect, it } from "vitest";
import { differenceBy } from "../src/differenceBy";

describe("src/differenceBy", () => {
	it("returns difference by iteratee key", () => {
		expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
		expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], "x")).toEqual([{ x: 2 }]);
	});
});
