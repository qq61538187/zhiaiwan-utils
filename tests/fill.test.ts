import { describe, expect, it } from "vitest";
import { fill } from "../src/fill";

describe("src/fill", () => {
	it("fills array in [start, end) range", () => {
		expect(fill([1, 2, 3], 0, 1, 3)).toEqual([1, 0, 0]);
		expect(fill([1, 2], 9)).toEqual([9, 9]);
	});

	it("supports negative start", () => {
		expect(fill([1, 2], 0, -1, 10)).toEqual([1, 0]);
	});
});
