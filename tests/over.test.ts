import { describe, expect, it } from "vitest";
import { over } from "../src/over";

describe("src/over", () => {
	it("invokes all iteratees with same args", () => {
		const fn = over<[number, number], number>([(a, b) => a + b, (a, b) => a * b]);
		expect(fn(2, 3)).toEqual([5, 6]);
	});
});
