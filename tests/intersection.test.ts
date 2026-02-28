import { describe, expect, it } from "vitest";
import { intersection } from "../src/intersection";

describe("src/intersection", () => {
	it("returns common values", () => {
		expect(intersection([2, 1], [2, 3])).toEqual([2]);
		expect(intersection([], [1])).toEqual([]);
	});
});
