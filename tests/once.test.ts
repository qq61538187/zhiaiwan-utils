import { describe, expect, it } from "vitest";
import { once } from "../src/once";

describe("src/once", () => {
	it("invokes function once and reuses first result", () => {
		const calls: number[] = [];
		const fn = once((v: number) => {
			calls.push(v);
			return v + 1;
		});
		expect(fn(1)).toBe(2);
		expect(fn(10)).toBe(2);
		expect(calls).toEqual([1]);
	});
});
