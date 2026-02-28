import { describe, expect, it } from "vitest";
import { before as beforeFn } from "../src/before";

describe("src/before", () => {
	it("invokes function while remaining calls > 0 and reuses last result", () => {
		const calls: number[] = [];
		const fn = beforeFn(3, (v: number) => {
			calls.push(v);
			return v * 2;
		});
		expect(fn(1)).toBe(2);
		expect(fn(2)).toBe(4);
		expect(fn(3)).toBe(4);
		expect(fn(4)).toBe(4);
		expect(calls).toEqual([1, 2]);
	});

	it("does not invoke for non-positive n", () => {
		const fn = beforeFn(0, (v: number) => v + 1);
		expect(fn(1)).toBeUndefined();
	});
});
