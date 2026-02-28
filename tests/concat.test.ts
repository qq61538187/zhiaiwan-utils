import { describe, expect, it } from "vitest";
import { concat } from "../src/concat";

describe("src/concat", () => {
	it("concats values and one-level arrays", () => {
		expect(concat([1], 2, [3, 4])).toEqual([1, 2, 3, 4]);
		expect(concat([], [1], [2])).toEqual([1, 2]);
	});

	it("returns empty for non-array base", () => {
		expect(concat(null as never, 1)).toEqual([1]);
	});
});
