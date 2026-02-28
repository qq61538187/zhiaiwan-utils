import { describe, expect, it } from "vitest";
import { pullAt } from "../src/pullAt";

describe("src/pullAt", () => {
	it("pulls values by indexes and mutates array", () => {
		const source = [1, 2, 3, 4];
		expect(pullAt(source, [1, 3])).toEqual([2, 4]);
		expect(source).toEqual([1, 3]);
	});
});
