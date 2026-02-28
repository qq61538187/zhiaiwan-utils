import { describe, expect, it } from "vitest";
import { zipObject } from "../src/zipObject";

describe("src/zipObject", () => {
	it("maps keys to values by index", () => {
		expect(zipObject(["a", "b"], [1, 2])).toEqual({ a: 1, b: 2 });
	});

	it("uses undefined for missing values", () => {
		expect(zipObject(["a", "b"], [1])).toEqual({ a: 1, b: undefined });
	});
});
