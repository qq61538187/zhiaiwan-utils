import { describe, expect, it } from "vitest";
import { xor } from "../src/xor";

describe("src/xor", () => {
	it("returns symmetric difference of arrays", () => {
		expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
		expect(xor()).toEqual([]);
	});
});
