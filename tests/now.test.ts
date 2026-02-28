import { describe, expect, it, vi } from "vitest";
import { now } from "../src/now";

describe("src/now", () => {
	it("returns Date.now result", () => {
		const spy = vi.spyOn(Date, "now").mockReturnValue(123);
		expect(now()).toBe(123);
		spy.mockRestore();
	});
});
