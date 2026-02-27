import { describe, expect, it, vi } from "vitest";
import { once } from "../src/once";

describe("once", () => {
	it("invokes function only once", () => {
		const fn = vi.fn((n: number) => n * 2);
		const wrapped = once(fn);
		expect(wrapped(2)).toBe(4);
		expect(wrapped(3)).toBe(4);
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("keeps this binding from first invocation", () => {
		const fn = vi.fn(function (this: { base: number }, value: number) {
			return this.base + value;
		});
		const wrapped = once(fn);
		expect(wrapped.call({ base: 2 }, 3)).toBe(5);
		expect(wrapped.call({ base: 10 }, 3)).toBe(5);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
