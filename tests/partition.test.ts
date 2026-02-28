import { describe, expect, it } from "vitest";
import { partition } from "../src/partition";

describe("src/partition", () => {
	it("partitions matched and unmatched values", () => {
		expect(partition([1, 2, 3], (v: unknown) => Number(v) > 1)).toEqual([[2, 3], [1]]);
		expect(partition({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1)).toEqual([[2], [1]]);
	});

	it("returns empty buckets for nullish collection", () => {
		expect(partition(null, () => true)).toEqual([[], []]);
	});
});
