import { describe, expect, it, vi } from "vitest";
import {
	ary,
	curry,
	flow,
	negate,
	overArgs,
	partial,
	partialRight,
	rearg,
	throttle,
	unary,
} from "../src/index";

describe("function extra methods", () => {
	it("supports partial (method thin wrapper)", () => {
		const add = (a: number, b: number) => a + b;
		expect(partial(add, 1)(2)).toBe(3);
	});

	it("supports negate (method thin wrapper)", () => {
		const isEven = (n: number) => n % 2 === 0;
		expect(negate(isEven)(1)).toBe(true);
		expect(negate(isEven)(2)).toBe(false);
	});

	it("supports unary (method thin wrapper)", () => {
		const fn = unary((a: number) => a);
		expect(fn(1, 10)).toBe(1);
	});

	it("supports flow composition", () => {
		const run = flow(
			(value: number) => value + 1,
			(value: number) => value * 2,
		);
		expect(run(3)).toBe(8);
	});

	it("supports curry progressive calls", () => {
		const sum3 = curry((a: number, b: number, c: number) => a + b + c);
		expect(sum3(1)(2)(3)).toBe(6);
	});

	it("supports throttle lifecycle", () => {
		vi.useFakeTimers();
		const fn = vi.fn((value: number) => value + 1);
		const wrapped = throttle(fn, 100);
		wrapped(1);
		wrapped(2);
		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledTimes(2);
		expect(wrapped.flush()).toBe(3);
		wrapped.cancel();
		vi.useRealTimers();
	});

	it("supports partialRight/rearg/overArgs/ary composition semantics", () => {
		const list = (a: string, b: string, c: string) => [a, b, c].join("|");
		expect(partialRight(list, "z")("x", "y")).toBe("x|y|z");
		expect(rearg(list, [2, 0, 1])("a", "b", "c")).toBe("c|a|b");
		expect(
			overArgs(
				(a: number, b: number) => a + b,
				(value) => Math.floor(value as number),
				(value) => Math.ceil(value as number),
			)(1.2, 1.2),
		).toBe(3);
		expect(
			ary((a: number, b: number, c: number) => a + b + c, 2)(1, 2, 100),
		).toBe(Number.NaN);
		expect(unary((v: number) => v)(1, 2)).toBe(1);
	});
});
