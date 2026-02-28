import { describe, expect, it, vi } from "vitest";
import { random } from "../src/random";

describe("src/random", () => {
	it("returns integer in range by default", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0);
		expect(random(1, 3)).toBe(1);
		spy.mockRestore();
	});

	it("returns float when floating is true", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0.5);
		expect(random(1, 3, true)).toBe(2);
		spy.mockRestore();
	});
});
