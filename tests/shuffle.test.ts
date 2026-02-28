import { describe, expect, it, vi } from "vitest";
import { shuffle } from "../src/shuffle";

describe("src/shuffle", () => {
	it("shuffles using random order", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0);
		expect(shuffle([1, 2, 3])).toEqual([2, 3, 1]);
		spy.mockRestore();
	});

	it("returns empty for nullish collection", () => {
		expect(shuffle(null)).toEqual([]);
	});
});
