import { describe, expect, it } from "vitest";
import { curry } from "../src/curry";

describe("src/curry", () => {
	it("supports progressive application", () => {
		const fn = curry((a: number, b: number, c: number) => a + b + c);
		expect(fn(1)(2)(3)).toBe(6);
		expect(fn(1, 2)(3)).toBe(6);
		expect(fn(1, 2, 3)).toBe(6);
	});
});
