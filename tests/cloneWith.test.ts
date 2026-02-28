import { describe, expect, it } from "vitest";
import { cloneWith } from "../src/cloneWith";

describe("src/cloneWith", () => {
	it("uses customizer result when not undefined", () => {
		expect(cloneWith([1, 2], (value) => (Array.isArray(value) ? ["x"] : undefined))).toEqual(["x"]);
	});

	it("falls back to default clone when customizer returns undefined", () => {
		const source = { a: 1 };
		const cloned = cloneWith(source, () => undefined);
		expect(cloned).toEqual(source);
		expect(cloned).not.toBe(source);
	});
});
