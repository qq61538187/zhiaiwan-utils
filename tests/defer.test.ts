import { describe, expect, it, vi } from "vitest";
import { defer } from "../src/defer";

describe("src/defer", () => {
	it("defers callback to next tick", () => {
		vi.useFakeTimers();
		const fn = vi.fn();
		defer(fn, "x");
		expect(fn).not.toHaveBeenCalled();
		vi.advanceTimersByTime(1);
		expect(fn).toHaveBeenCalledWith("x");
		vi.useRealTimers();
	});
});
