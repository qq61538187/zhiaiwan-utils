import { describe, expect, it } from "vitest";
import { castArray } from "../src/castArray";

describe("src/castArray", () => {
	it("casts values into arrays", () => {
		expect(castArray()).toEqual([]);
		expect(castArray(1)).toEqual([1]);
		expect(castArray([1, 2])).toEqual([1, 2]);
	});
});
