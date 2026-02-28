import { describe, expect, it } from "vitest";
import { has } from "../src/has";

describe("src/has", () => {
	it("checks own nested path existence", () => {
		expect(has({ a: { b: 2 } }, "a.b")).toBe(true);
		expect(has({ a: { b: 2 } }, "a.c")).toBe(false);
	});

	it("returns false for inherited, empty and unsafe paths", () => {
		const object = Object.create({ a: { b: 2 } });
		object.own = 1;
		expect(has(object, "a.b")).toBe(false);
		expect(has(object, [])).toBe(false);
		expect(has({ safe: true }, "__proto__.x")).toBe(false);
	});
});
