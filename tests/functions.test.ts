import { describe, expect, it } from "vitest";
import { functions } from "../src/functions";

describe("src/functions", () => {
	it("returns own enumerable function keys only", () => {
		const object = Object.assign(Object.create({ inheritedFn() {} }), {
			a() {},
			b: 1,
		});
		expect(functions(object)).toEqual(["a"]);
	});

	it("skips non-enumerable function keys", () => {
		const object = { a() {} } as Record<string, unknown>;
		Object.defineProperty(object, "hidden", {
			value: () => 1,
			enumerable: false,
		});
		expect(functions(object)).toEqual(["a"]);
	});
});
