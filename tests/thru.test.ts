import { describe, expect, it } from "vitest";
import { thru } from "../src/thru";

describe("src/thru", () => {
	it("returns interceptor result", () => {
		expect(thru([1, 2, 3], (arr) => arr.slice(1))).toEqual([2, 3]);
	});
});
