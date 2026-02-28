import { afterEach, describe, expect, it, vi } from "vitest";
import { debounce } from "../src/debounce";

describe("src/debounce", () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	it("debounces calls and keeps last arguments", () => {
		vi.useFakeTimers();
		const calls: number[] = [];
		const fn = debounce((value: number) => {
			calls.push(value);
			return value * 2;
		}, 100);

		fn(1);
		fn(2);
		expect(calls).toEqual([]);
		vi.advanceTimersByTime(100);
		expect(calls).toEqual([2]);
	});

	it("supports flush and cancel lifecycle", () => {
		vi.useFakeTimers();
		const calls: number[] = [];
		const fn = debounce((value: number) => {
			calls.push(value);
			return value;
		}, 100);

		expect(fn.flush()).toBeUndefined();
		fn(1);
		expect(fn.flush()).toBe(1);
		expect(calls).toEqual([1]);

		fn(2);
		fn.cancel();
		vi.advanceTimersByTime(150);
		expect(calls).toEqual([1]);
	});
});
