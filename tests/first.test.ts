import { describe, expect, it } from "vitest";
import { first } from "../src/first";

describe("src/first", () => {
	it("returns first element", () => {
		expect(first([1, 2, 3])).toBe(1);
		expect(first([])).toBeUndefined();
	});
});
