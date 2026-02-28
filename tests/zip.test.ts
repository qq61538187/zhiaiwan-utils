import { describe, expect, it } from "vitest";
import { zip } from "../src/zip";

describe("src/zip", () => {
	it("zips arrays by index", () => {
		expect(zip([1, 2], ["a", "b"])).toEqual([
			[1, "a"],
			[2, "b"],
		]);
	});

	it("pads with undefined for uneven lengths", () => {
		expect(zip([1], ["a", "b"])).toEqual([
			[1, "a"],
			[undefined, "b"],
		]);
	});
});
