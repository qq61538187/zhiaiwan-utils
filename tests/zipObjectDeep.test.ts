import { describe, expect, it } from "vitest";
import { zipObjectDeep } from "../src/zipObjectDeep";

describe("src/zipObjectDeep", () => {
	it("maps deep paths to values", () => {
		expect(zipObjectDeep(["a.b", "a.c"], [1, 2])).toEqual({ a: { b: 1, c: 2 } });
	});

	it("supports array index paths", () => {
		expect(zipObjectDeep(["a[0].b"], [3])).toEqual({ a: [{ b: 3 }] });
	});
});
