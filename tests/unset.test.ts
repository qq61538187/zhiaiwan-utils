import { describe, expect, it } from "vitest";
import { unset } from "../src/unset";

describe("src/unset", () => {
	it("unsets existing path and returns true", () => {
		const target = { a: [{ b: 2 }] };
		expect(unset(target, "a[0].b")).toBe(true);
		expect(target).toEqual({ a: [{}] });
	});

	it("returns false for missing path and true for nullish object", () => {
		expect(unset({ a: 1 }, "a.b")).toBe(false);
		expect(unset(null, "a.b")).toBe(true);
	});
});
