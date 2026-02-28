import { describe, expect, it } from "vitest";
import { result } from "../src/result";

describe("src/result", () => {
	it("resolves value and invokes function values", () => {
		const object = {
			a: {
				value: 3,
				getValue(this: { value: number }) {
					return this.value;
				},
			},
		};

		expect(result(object, "a.value")).toBe(3);
		expect(result(object, "a.getValue")).toBe(3);
	});

	it("uses default value and invokes function default", () => {
		const object = { a: {} };
		expect(result(object, "a.missing", 1)).toBe(1);
		expect(result(object, "a.missing", () => 2)).toBe(2);
	});

	it("returns default for unsafe or broken paths", () => {
		expect(result({ safe: true }, "__proto__.x", "fallback")).toBe("fallback");
		expect(result({ a: null }, "a.b", "fallback")).toBe("fallback");
		expect(result(null, "a.b", "fallback")).toBe("fallback");
	});
});
