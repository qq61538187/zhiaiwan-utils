import { describe, expect, it } from "vitest";
import { toPlainObject } from "../src/toPlainObject";

describe("src/toPlainObject", () => {
	it("copies own and inherited enumerable keys", () => {
		const proto = { inherited: 1 };
		const source = Object.assign(Object.create(proto), { own: 2 });
		expect(toPlainObject(source)).toEqual({ own: 2, inherited: 1 });
	});

	it("supports objects without prototype", () => {
		const source = Object.create(null) as Record<string, unknown>;
		source.a = 1;
		expect(toPlainObject(source)).toEqual({ a: 1 });
	});
});
