import { describe, expect, it } from "vitest";
import { last } from "../src/last";

describe("src/last", () => {
	it("returns last element", () => {
		expect(last([1, 2, 3])).toBe(3);
		expect(last([])).toBeUndefined();
	});
});
