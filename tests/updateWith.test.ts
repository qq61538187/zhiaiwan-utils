import { describe, expect, it } from "vitest";
import { updateWith } from "../src/updateWith";

describe("src/updateWith", () => {
	it("updates existing path value", () => {
		const object = { a: { b: 1 } };
		expect(updateWith(object, "a.b", (v) => Number(v) + 1)).toEqual({
			a: { b: 2 },
		});
	});

	it("creates missing path with customizer", () => {
		const object: Record<string, unknown> = {};
		expect(
			updateWith(
				object,
				"a.b",
				(v) => (v == null ? 1 : Number(v) + 1),
				() => ({}),
			),
		).toEqual({
			a: { b: 1 },
		});
	});
});
