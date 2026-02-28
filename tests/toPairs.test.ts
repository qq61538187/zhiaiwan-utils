import { describe, expect, it } from "vitest";
import { toPairs } from "../src/toPairs";

describe("src/toPairs", () => {
	it("returns own key-value pairs", () => {
		expect(toPairs({ a: 1, b: 2 })).toEqual([
			["a", 1],
			["b", 2],
		]);
	});

	it("returns empty for empty object", () => {
		expect(toPairs({})).toEqual([]);
	});
});
