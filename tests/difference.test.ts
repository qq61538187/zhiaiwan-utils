import { describe, expect, it } from "vitest";
import { difference } from "../src/difference";

describe("difference", () => {
	it("returns values not included in exclusion list", () => {
		expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
	});

	it("handles empty exclusion values", () => {
		expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
	});
});
