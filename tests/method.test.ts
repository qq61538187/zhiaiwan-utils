import { describe, expect, it } from "vitest";
import { method } from "../src/method";

describe("src/method", () => {
	it("returns invoker for method path", () => {
		const invoke = method("a.add", 3);
		expect(
			invoke({
				a: {
					base: 2,
					add(this: { base: number }, x: number) {
						return this.base + x;
					},
				},
			}),
		).toBe(5);
		expect(invoke({ a: {} })).toBeUndefined();
	});
});
