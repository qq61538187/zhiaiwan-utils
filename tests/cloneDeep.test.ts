import { describe, expect, it } from "vitest";
import { cloneDeep } from "../src/cloneDeep";

describe("src/cloneDeep", () => {
	it("creates deep clone for nested values", () => {
		const source = { a: { b: [1, 2] } };
		const cloned = cloneDeep(source) as { a: { b: number[] } };
		expect(cloned).toEqual(source);
		expect(cloned).not.toBe(source);
		expect(cloned.a).not.toBe(source.a);
	});
});
