import { describe, expect, it } from "vitest";
import { mergeWith } from "../src/mergeWith";

describe("src/mergeWith", () => {
	it("uses customizer when provided", () => {
		const target = { arr: [1] };
		expect(
			mergeWith(target, { arr: [2, 3] }, (obj, src) => {
				if (Array.isArray(obj) && Array.isArray(src)) {
					return [...obj, ...src];
				}
				return undefined;
			}),
		).toEqual({ arr: [1, 2, 3] });
	});

	it("falls back to default merge when customizer returns undefined", () => {
		expect(mergeWith({ a: { b: 1 } }, { a: { c: 2 } }, () => undefined)).toEqual({
			a: { b: 1, c: 2 },
		});
	});
});
