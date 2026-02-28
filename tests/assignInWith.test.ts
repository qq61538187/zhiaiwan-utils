import { describe, expect, it } from "vitest";
import { assignInWith } from "../src/assignInWith";

describe("src/assignInWith", () => {
	it("assigns inherited keys with customizer", () => {
		const source = Object.assign(Object.create({ inherited: 1 }), { own: 2 });
		expect(
			assignInWith({}, source, (_obj, src) => (typeof src === "number" ? src * 2 : src)),
		).toEqual({ inherited: 2, own: 4 });
	});

	it("blocks unsafe keys", () => {
		const target = { safe: true } as Record<string, unknown>;
		const source = JSON.parse('{"__proto__":{"polluted":"x"}}');
		assignInWith(target, source, () => undefined);
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(target.safe).toBe(true);
	});
});
