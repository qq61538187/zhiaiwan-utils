import { describe, expect, it, vi } from "vitest";
import { sample } from "../src/sample";

describe("src/sample", () => {
	it("selects one value from collection", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0);
		expect(sample([1, 2, 3])).toBe(1);
		spy.mockRestore();
	});

	it("returns undefined for empty or nullish collection", () => {
		expect(sample([])).toBeUndefined();
		expect(sample(null)).toBeUndefined();
	});
});
