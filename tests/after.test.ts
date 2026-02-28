import { describe, expect, it } from "vitest";
import { after as afterFn } from "../src/after";

describe("src/after", () => {
	it("invokes function only after threshold", () => {
		const fn = afterFn(3, (v: number) => v * 2);
		expect(fn(1)).toBeUndefined();
		expect(fn(2)).toBeUndefined();
		expect(fn(3)).toBe(6);
		expect(fn(4)).toBe(8);
	});

	it("handles non-finite threshold as immediate invoke", () => {
		const fn = afterFn(Number.POSITIVE_INFINITY, (v: number) => v + 1);
		expect(fn(1)).toBe(2);
	});
});
