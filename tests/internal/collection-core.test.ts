import { describe, expect, it } from "vitest";
import { toCollectionEntries } from "../../src/internal/collection-core";

describe("src/internal/collection-core", () => {
	it("returns empty entries for nullish input", () => {
		expect(toCollectionEntries(null)).toEqual([]);
		expect(toCollectionEntries(undefined)).toEqual([]);
	});

	it("maps array input to index-value pairs", () => {
		expect(toCollectionEntries(["a", "b"])).toEqual([
			[0, "a"],
			[1, "b"],
		]);
	});

	it("maps object input to key-value pairs", () => {
		expect(toCollectionEntries({ a: 1, b: 2 })).toEqual([
			["a", 1],
			["b", 2],
		]);
	});
});
