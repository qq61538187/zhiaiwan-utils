import { describe, expect, it } from "vitest";
import { assign } from "../src/assign";

describe("src/assign", () => {
	it("assigns own enumerable keys from sources", () => {
		const target = { a: 1 };
		expect(assign(target, { b: 2 }, { a: 3 })).toEqual({ a: 3, b: 2 });
		expect(target).toEqual({ a: 3, b: 2 });
	});

	it("ignores nullish sources and inherited keys", () => {
		const source = Object.assign(Object.create({ inherited: 1 }), { own: 2 });
		expect(assign({ a: 1 }, source, null, undefined)).toEqual({
			a: 1,
			own: 2,
		});
	});
});
