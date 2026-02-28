import { describe, expect, it } from "vitest";
import { overSome } from "../src/overSome";

describe("src/overSome", () => {
	it("returns true when any predicate is truthy", () => {
		const fn = overSome<readonly [number]>([(n) => n > 5, (n) => n < 3]);
		expect(fn(2)).toBe(true);
		expect(fn(4)).toBe(false);
	});
});
