import { describe, expect, it } from "vitest";
import { sumBy } from "../src/sumBy";

describe("src/sumBy", () => {
	it("sums iteratee results and ignores NaN scores", () => {
		expect(sumBy([{ n: 2 }, { n: 4 }], "n")).toBe(6);
		expect(sumBy([{ n: 2 }, { n: Number.NaN }], "n")).toBe(2);
	});
});
