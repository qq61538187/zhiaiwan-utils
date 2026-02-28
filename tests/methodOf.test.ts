import { describe, expect, it } from "vitest";
import { methodOf } from "../src/methodOf";

describe("src/methodOf", () => {
	it("returns invoker bound to object", () => {
		const invokeFrom = methodOf(
			{
				a: {
					base: 1,
					add(this: { base: number }, x: number) {
						return this.base + x;
					},
				},
			},
			2,
		);
		expect(invokeFrom("a.add")).toBe(3);
		expect(invokeFrom("a.missing")).toBeUndefined();
		expect(methodOf(null)("a.add")).toBeUndefined();
	});
});
