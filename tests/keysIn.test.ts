import { describe, expect, it } from "vitest";
import { keysIn } from "../src/keysIn";

describe("src/keysIn", () => {
	it("returns own and inherited keys", () => {
		const object = Object.assign(Object.create({ inherited: 1 }), { own: 2 });
		expect(keysIn(object)).toEqual(["own", "inherited"]);
	});

	it("returns empty for nullish values", () => {
		expect(keysIn(null)).toEqual([]);
		expect(keysIn(undefined)).toEqual([]);
	});
});
