import { describe, expect, it } from "vitest";
import { toArray } from "../src/toArray";

describe("src/toArray", () => {
	it("converts common values to arrays", () => {
		expect(toArray([1, 2])).toEqual([1, 2]);
		expect(toArray("ab")).toEqual(["a", "b"]);
		expect(toArray({ a: 1, b: 2 })).toEqual([1, 2]);
	});

	it("handles nullish and map/set inputs", () => {
		expect(toArray(null)).toEqual([]);
		expect(toArray(new Set([1, 2]))).toEqual([1, 2]);
		expect(toArray(new Map([["a", 1]])).length).toBe(1);
	});
});
