import { describe, expect, it } from "vitest";
import { toPairsIn } from "../src/toPairsIn";

describe("src/toPairsIn", () => {
	it("returns own and inherited pairs", () => {
		const base = { inherited: 1 };
		const object = Object.assign(Object.create(base), { own: 2 });
		expect(toPairsIn(object)).toEqual([
			["own", 2],
			["inherited", 1],
		]);
	});
});
