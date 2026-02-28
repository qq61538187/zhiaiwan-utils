import { describe, expect, it } from "vitest";
import { overEvery } from "../src/overEvery";

describe("src/overEvery", () => {
	it("returns true only when all predicates are truthy", () => {
		const fn = overEvery<readonly [number]>([(n) => n > 0, (n) => n < 3]);
		expect(fn(2)).toBe(true);
		expect(fn(4)).toBe(false);
	});
});
