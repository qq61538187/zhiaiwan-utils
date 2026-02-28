import { describe, expect, it } from "vitest";
import { valuesIn } from "../src/valuesIn";

describe("src/valuesIn", () => {
	it("returns own and inherited enumerable values", () => {
		const base = { inherited: 1 };
		const object = Object.assign(Object.create(base), { own: 2 });
		expect(valuesIn(object)).toEqual([2, 1]);
	});

	it("returns empty array for nullish", () => {
		expect(valuesIn(null)).toEqual([]);
		expect(valuesIn(undefined)).toEqual([]);
	});
});
