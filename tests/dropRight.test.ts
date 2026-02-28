import { describe, expect, it } from "vitest";
import { dropRight } from "../src/dropRight";

describe("src/dropRight", () => {
	it("drops last n elements", () => {
		expect(dropRight([1, 2, 3], 1)).toEqual([1, 2]);
		expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});

	it("returns empty when n >= length", () => {
		expect(dropRight([1, 2], 3)).toEqual([]);
	});
});
