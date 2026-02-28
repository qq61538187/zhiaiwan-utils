import { describe, expect, it } from "vitest";
import { isArrayLike } from "../src/isArrayLike";

describe("src/isArrayLike", () => {
	it("detects array-like values", () => {
		expect(isArrayLike([1, 2])).toBe(true);
		expect(isArrayLike("abc")).toBe(true);
		expect(isArrayLike({ length: 2 })).toBe(true);
		expect(isArrayLike(() => {})).toBe(false);
	});
});
