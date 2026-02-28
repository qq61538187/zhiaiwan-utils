import { describe, expect, it } from "vitest";
import { pullAll } from "../src/pullAll";

describe("src/pullAll", () => {
	it("removes all values from provided list", () => {
		const source = [1, 2, 3, 2];
		expect(pullAll(source, [2, 3])).toEqual([1]);
		expect(source).toEqual([1]);
	});
});
