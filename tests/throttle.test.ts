import { afterEach, describe, expect, it, vi } from "vitest";
import { throttle } from "../src/throttle";

describe("src/throttle", () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	it("throttles calls with leading + trailing by default", () => {
		vi.useFakeTimers();
		const calls: number[] = [];
		const fn = throttle((value: number) => {
			calls.push(value);
			return value * 2;
		}, 100);

		expect(fn(1)).toBe(2);
		expect(fn(2)).toBe(2);
		expect(calls).toEqual([1]);

		vi.advanceTimersByTime(100);
		expect(calls).toEqual([1, 2]);
	});

	it("supports leading=false and flush/cancel", () => {
		vi.useFakeTimers();
		const calls: number[] = [];
		const fn = throttle(
			(value: number) => {
				calls.push(value);
				return value;
			},
			100,
			{ leading: false },
		);

		expect(fn(1)).toBeUndefined();
		expect(calls).toEqual([]);
		expect(fn.flush()).toBe(1);
		expect(calls).toEqual([1]);

		fn(2);
		fn.cancel();
		vi.advanceTimersByTime(200);
		expect(calls).toEqual([1]);
	});
});
