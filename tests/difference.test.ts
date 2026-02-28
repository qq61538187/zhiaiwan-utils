import { describe, expect, it } from "vitest";
import { difference } from "../src/difference";

describe("src/difference", () => {
	it("returns values not present in others", () => {
		expect(difference([2, 1], [2, 3])).toEqual([1]);
	});

	it("handles empty inputs", () => {
		expect(difference([], [1])).toEqual([]);
	});
});
