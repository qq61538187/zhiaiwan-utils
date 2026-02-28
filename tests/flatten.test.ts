import { describe, expect, it } from "vitest";
import { flatten } from "../src/flatten";

describe("src/flatten", () => {
	it("flattens one level only", () => {
		expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]);
	});

	it("returns empty for non-array input", () => {
		expect(flatten(null as never)).toEqual([]);
	});
});
