import { describe, expect, it } from "vitest";
import { sum } from "../src/sum";

describe("src/sum", () => {
	it("sums array values", () => {
		expect(sum([1, 2, 3, 4])).toBe(10);
		expect(sum([])).toBe(0);
	});
});
