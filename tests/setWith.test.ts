import { describe, expect, it } from "vitest";
import { setWith } from "../src/setWith";

describe("src/setWith", () => {
	it("sets value with customizer-created containers", () => {
		const target: Record<string, unknown> = {};
		setWith(target, "a[0].b", 1, () => ({}));
		expect(target).toEqual({ a: { 0: { b: 1 } } });
	});

	it("throws when target is nullish", () => {
		expect(() => setWith(null as never, "a", 1, Object)).toThrow();
	});
});
