import { describe, expect, it } from "vitest";
import { extendWith } from "../src/extendWith";

describe("src/extendWith", () => {
	it("extends with customizer and inherited source keys", () => {
		const source = Object.assign(Object.create({ inherited: 2 }), { a: 3 });
		const target = { a: 1 };
		const result = extendWith(target, source, (objValue, srcValue) =>
			objValue === undefined ? srcValue : objValue,
		);
		expect(result).toEqual({ a: 1, inherited: 2 });
	});

	it("falls back to source value when customizer returns undefined", () => {
		const target = { a: 1 };
		expect(extendWith(target, { a: 2 }, () => undefined)).toEqual({ a: 2 });
	});

	it("ignores unsafe keys from source", () => {
		const target = { safe: true } as Record<string, unknown>;
		const source = JSON.parse('{"__proto__":{"polluted":"x"}}') as Record<string, unknown>;
		extendWith(target, source);
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(target.safe).toBe(true);
	});
});
