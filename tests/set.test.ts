import { describe, expect, it } from "vitest";
import { set } from "../src/set";

describe("src/set", () => {
	it("sets nested path and creates containers", () => {
		const target: Record<string, unknown> = {};
		expect(set(target, "a[0].b", 2)).toBe(target);
		expect(target).toEqual({ a: [{ b: 2 }] });
	});

	it("ignores unsafe path writes", () => {
		const target: Record<string, unknown> = { safe: true };
		set(target, "__proto__.polluted", "x");
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(target.safe).toBe(true);
	});
});
