import { describe, expect, it } from "vitest";
import { slice } from "../src/slice";

describe("src/slice", () => {
	it("slices array by start/end", () => {
		expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
		expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
	});
});
