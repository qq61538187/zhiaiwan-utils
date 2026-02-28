import { describe, expect, it } from "vitest";
import { invoke } from "../src/invoke";

describe("src/invoke", () => {
	it("invokes method by path and forwards args", () => {
		const object = {
			a: {
				value: 2,
				add(this: { value: number }, x: number) {
					return this.value + x;
				},
			},
		};
		expect(invoke(object, "a.add", 3)).toBe(5);
		expect(invoke(object, ["a", "add"], 1)).toBe(3);
	});

	it("returns undefined for missing or non-function path", () => {
		expect(invoke({ a: 1 }, "a")).toBeUndefined();
		expect(invoke({ a: {} }, "a.missing")).toBeUndefined();
		expect(invoke(null, "a.b")).toBeUndefined();
	});

	it("blocks unsafe path segments", () => {
		expect(invoke({ safe: true }, "__proto__.x")).toBeUndefined();
	});
});
