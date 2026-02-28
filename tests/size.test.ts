import { describe, expect, it } from "vitest";
import { size } from "../src/size";

describe("src/size", () => {
	it("returns size of arrays/strings/objects", () => {
		expect(size([1, 2, 3])).toBe(3);
		expect(size("abc")).toBe(3);
		expect(size({ a: 1, b: 2 })).toBe(2);
	});

	it("supports map/set and nullish", () => {
		expect(size(new Map([["a", 1]]) as never)).toBe(0);
		expect(size(new Set([1, 2]) as never)).toBe(0);
		expect(size(null)).toBe(0);
	});
});
