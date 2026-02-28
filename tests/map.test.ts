import { describe, expect, it } from "vitest";
import { map } from "../src/map";

describe("src/map", () => {
	it("maps arrays and objects", () => {
		expect(map([1, 2], (v: unknown) => Number(v) * 2)).toEqual([2, 4]);
		expect(map({ a: 1, b: 2 }, (v: unknown) => Number(v) + 1)).toEqual([2, 3]);
	});

	it("returns empty for nullish collection", () => {
		expect(map(null, (v: unknown) => v)).toEqual([]);
	});
});
