import { describe, expect, it } from "vitest";
import { extend } from "../src/extend";

describe("src/extend", () => {
	it("assigns own and inherited properties from sources", () => {
		const proto = { p: 1 };
		const source = Object.create(proto) as { a: number };
		source.a = 2;
		expect(extend({}, source)).toEqual({ a: 2, p: 1 });
	});
});
