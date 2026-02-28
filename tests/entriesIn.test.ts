import { describe, expect, it } from "vitest";
import { entriesIn } from "../src/entriesIn";

describe("src/entriesIn", () => {
	it("returns own and inherited key-value pairs", () => {
		const base = { inherited: 1 };
		const object = Object.assign(Object.create(base), { own: 2 });
		expect(entriesIn(object)).toEqual([
			["own", 2],
			["inherited", 1],
		]);
	});
});
