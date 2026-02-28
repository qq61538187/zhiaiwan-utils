import { describe, expect, it } from "vitest";
import { hasIn } from "../src/hasIn";

describe("src/hasIn", () => {
	it("supports own and inherited paths", () => {
		const base = { a: { b: 2 } };
		const object = Object.create(base) as { own?: { x: number } };
		object.own = { x: 1 };

		expect(hasIn(object, "own.x")).toBe(true);
		expect(hasIn(object, "a.b")).toBe(true);
	});

	it("returns false for invalid or missing paths", () => {
		expect(hasIn(null, "a.b")).toBe(false);
		expect(hasIn({ a: 1 }, "")).toBe(false);
		expect(hasIn({ a: { b: 1 } }, "a.c")).toBe(false);
		expect(hasIn({ a: null }, "a.b")).toBe(false);
	});

	it("blocks unsafe segments", () => {
		const object = { safe: true };
		expect(hasIn(object, "__proto__.x")).toBe(false);
		expect(hasIn(object, "constructor.x")).toBe(false);
		expect(hasIn(object, "prototype.x")).toBe(false);
	});
});
