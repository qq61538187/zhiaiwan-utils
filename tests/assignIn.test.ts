import { describe, expect, it } from "vitest";
import { assignIn } from "../src/assignIn";

describe("src/assignIn", () => {
	it("assigns own and inherited enumerable keys", () => {
		const source = Object.assign(Object.create({ inherited: 2 }), { own: 3 });
		expect(assignIn({ a: 1 }, source)).toEqual({ a: 1, own: 3, inherited: 2 });
	});

	it("blocks unsafe keys", () => {
		const target = { safe: true } as Record<string, unknown>;
		const source = JSON.parse('{"__proto__":{"polluted":"x"}}');
		assignIn(target, source);
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(target.safe).toBe(true);
	});
});
