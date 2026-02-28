import { describe, expect, it } from "vitest";
import { assignWith } from "../src/assignWith";

describe("src/assignWith", () => {
	it("uses customizer value when provided", () => {
		const target = { a: 1 };
		expect(
			assignWith(target, { a: 2, b: 3 }, (obj, src) => (obj === undefined ? src : obj)),
		).toEqual({ a: 1, b: 3 });
	});

	it("falls back to source value when customizer returns undefined", () => {
		expect(assignWith({ a: 1 }, { a: 2 }, () => undefined)).toEqual({ a: 2 });
	});
});
