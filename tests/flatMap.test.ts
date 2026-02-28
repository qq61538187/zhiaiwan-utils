import { describe, expect, it } from "vitest";
import { flatMap } from "../src/flatMap";

describe("src/flatMap", () => {
	it("maps and flattens one level", () => {
		expect(flatMap([1, 2], (v: unknown) => [Number(v), Number(v) * 2])).toEqual([1, 2, 2, 4]);
	});

	it("returns empty for nullish collection", () => {
		expect(flatMap(null, () => [1])).toEqual([]);
	});
});
