import { describe, expect, it } from "vitest";
import { update } from "../src/update";

describe("src/update", () => {
	it("updates existing nested value", () => {
		const object = { a: { b: 1 } };
		expect(update(object, "a.b", (v) => Number(v) + 1)).toEqual({ a: { b: 2 } });
	});

	it("creates missing path via updater", () => {
		const object: Record<string, unknown> = {};
		expect(update(object, "a.b", (v) => (v == null ? 1 : Number(v) + 1))).toEqual({
			a: { b: 1 },
		});
	});
});
