import { describe, expect, it } from "vitest";
import { merge } from "../src/merge";

describe("src/merge", () => {
	it("deep merges source objects into target", () => {
		const target = { a: { b: 1 }, c: 1 };
		expect(merge(target, { a: { d: 2 } }, { c: 2 })).toEqual({
			a: { b: 1, d: 2 },
			c: 2,
		});
	});
});
