import { describe, expect, it } from "vitest";
import { every } from "../src/every";

describe("src/every", () => {
	it("returns true only when all elements match", () => {
		expect(every([1, 2, 3], (v: unknown) => Number(v) > 0)).toBe(true);
		expect(every([1, 2, 3], (v: unknown) => Number(v) > 1)).toBe(false);
	});

	it("supports object collection and nullish", () => {
		expect(every({ a: 1, b: 2 }, (v: unknown) => Number(v) > 0)).toBe(true);
		expect(every(null, () => false)).toBe(true);
	});
});
