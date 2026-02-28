import { describe, expect, it } from "vitest";
import { flattenDeep } from "../src/flattenDeep";

describe("src/flattenDeep", () => {
	it("flattens recursively", () => {
		expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
	});

	it("returns empty for non-array input", () => {
		expect(flattenDeep(undefined as never)).toEqual([]);
	});
});
