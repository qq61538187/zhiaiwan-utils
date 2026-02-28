import { describe, expect, it } from "vitest";
import { pull } from "../src/pull";

describe("src/pull", () => {
	it("removes given values in place", () => {
		const source = [1, 2, 1, 3];
		expect(pull(source, 1)).toBe(source);
		expect(source).toEqual([2, 3]);
	});
});
