import { describe, expect, it } from "vitest";
import { memoize } from "../src/memoize";

describe("src/memoize", () => {
	it("caches by first argument by default", () => {
		let count = 0;
		const fn = memoize((n: number) => {
			count += 1;
			return n * 2;
		});
		expect(fn(2)).toBe(4);
		expect(fn(2)).toBe(4);
		expect(count).toBe(1);
	});

	it("supports custom resolver", () => {
		let count = 0;
		const fn = memoize(
			(a: number, b: number) => {
				count += 1;
				return a + b;
			},
			(a, b) => `${a}:${b}`,
		);
		expect(fn(1, 2)).toBe(3);
		expect(fn(1, 2)).toBe(3);
		expect(count).toBe(1);
	});
});
