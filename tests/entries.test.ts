import { describe, expect, it } from "vitest";
import { entries } from "../src/entries";

describe("src/entries", () => {
	it("returns own enumerable key-value pairs", () => {
		expect(entries({ a: 1, b: 2 })).toEqual([
			["a", 1],
			["b", 2],
		]);
	});
});
