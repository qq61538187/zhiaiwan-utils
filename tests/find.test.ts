import { describe, expect, it } from "vitest";
import { find } from "../src/find";

describe("src/find", () => {
	it("finds first matched value with predicate", () => {
		expect(find([1, 2, 3], (v: unknown) => Number(v) > 1)).toBe(2);
		expect(find({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1)).toBe(2);
	});

	it("supports fromIndex and nullish guards", () => {
		expect(find([1, 2, 3], (v: unknown) => Number(v) > 1, 2)).toBe(3);
		expect(find([1, 2, 3], (v: unknown) => Number(v) > 3)).toBeUndefined();
		expect(find(null, () => true)).toBeUndefined();
	});
});
