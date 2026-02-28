import { describe, expect, it } from "vitest";
import { ary } from "../src/ary";

describe("src/ary", () => {
	it("caps forwarded arguments to n", () => {
		const fn = ary((a: number, b: number) => [a, b], 1);
		expect(fn(1, 2)).toEqual([1, undefined]);
	});

	it("handles zero and fractional n", () => {
		const zero = ary((a?: number) => a, 0);
		const fractional = ary((a: number, b: number) => [a, b], 1.8);
		expect(zero(1)).toBeUndefined();
		expect(fractional(1, 2)).toEqual([1, undefined]);
	});
});
