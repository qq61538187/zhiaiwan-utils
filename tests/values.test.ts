import { describe, expect, it } from "vitest";
import { values } from "../src/values";

describe("src/values", () => {
	it("returns own enumerable values", () => {
		const object = Object.assign(Object.create({ inherited: 1 }), { a: 2, b: 3 });
		expect(values(object)).toEqual([2, 3]);
	});

	it("returns empty for nullish and non-enumerable primitives", () => {
		expect(values(null)).toEqual([]);
		expect(values(undefined)).toEqual([]);
		expect(values(1)).toEqual([]);
	});
});
