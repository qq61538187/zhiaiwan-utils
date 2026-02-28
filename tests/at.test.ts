import { describe, expect, it } from "vitest";
import { at } from "../src/at";

describe("src/at", () => {
	it("returns values at paths", () => {
		expect(at({ a: [{ b: { c: 3 } }, 4] }, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
	});

	it("returns undefined values for missing paths", () => {
		expect(at(null, ["a.b", "c"])).toEqual([undefined, undefined]);
	});
});
