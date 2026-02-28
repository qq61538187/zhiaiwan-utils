import { describe, expect, it, vi } from "vitest";
import { delay } from "../src/delay";

describe("src/delay", () => {
	it("invokes callback after wait", () => {
		vi.useFakeTimers();
		const fn = vi.fn();
		delay(fn, 10, "x");
		expect(fn).not.toHaveBeenCalled();
		vi.advanceTimersByTime(10);
		expect(fn).toHaveBeenCalledWith("x");
		vi.useRealTimers();
	});
});
