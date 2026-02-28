import { describe, expect, it } from "vitest";
import { keys } from "../src/keys";

describe("src/keys", () => {
	it("returns own enumerable keys only", () => {
		const object = Object.assign(Object.create({ inherited: 1 }), { a: 1, b: 2 });
		expect(keys(object)).toEqual(["a", "b"]);
	});

	it("returns empty for nullish values", () => {
		expect(keys(null)).toEqual([]);
		expect(keys(undefined)).toEqual([]);
	});
});
