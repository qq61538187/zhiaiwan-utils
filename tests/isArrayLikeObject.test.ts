import { describe, expect, it } from "vitest";
import { isArrayLikeObject } from "../src/isArrayLikeObject";

describe("src/isArrayLikeObject", () => {
	it("detects object-like array-likes only", () => {
		expect(isArrayLikeObject([1, 2])).toBe(true);
		expect(isArrayLikeObject({ length: 1 })).toBe(true);
		expect(isArrayLikeObject("abc")).toBe(false);
	});
});
