import { describe, expect, it } from "vitest";
import { meanBy } from "../src/meanBy";

describe("src/meanBy", () => {
	it("computes mean via iteratee", () => {
		expect(meanBy([{ n: 2 }, { n: 4 }], "n")).toBe(3);
	});

	it("returns NaN for empty collection", () => {
		expect(Number.isNaN(meanBy([], "n"))).toBe(true);
	});
});
