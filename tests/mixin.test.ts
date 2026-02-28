import { describe, expect, it } from "vitest";
import { mixin } from "../src/mixin";

describe("src/mixin", () => {
	it("mixes function entries into object target", () => {
		const target: Record<string, unknown> = {};
		const source = {
			double: (value: number) => value * 2,
			ignored: 1,
		};
		const result = mixin(target, source);
		expect(result).toBe(target);
		expect((target.double as (v: number) => number)(2)).toBe(4);
		expect(target.ignored).toBeUndefined();
	});

	it("supports wrapper chaining on mixed object methods", () => {
		const target = {} as Record<string, unknown>;
		mixin(target, {
			double: (value: number) => value * 2,
		});
		const wrapped = (target.chain as (v: number) => { double: () => unknown; value: () => number })(
			2,
		);
		expect((wrapped.double() as { value: () => number }).value()).toBe(4);
	});

	it("supports function target prototype branch with chain=false", () => {
		const Target = function (this: { x: number }, x: number) {
			this.x = x;
		} as unknown as {
			new (x: number): { x: number; add: (v: number) => number };
			prototype: Record<string, unknown>;
		};

		mixin(
			Target as unknown as Record<PropertyKey, unknown>,
			{
				add(this: { x: number }, n: number) {
					return this.x + n;
				},
			},
			{ chain: false },
		);

		const instance = new Target(1);
		expect(instance.add(2)).toBe(3);
	});

	it("supports this-bound target when source is omitted", () => {
		const context: Record<string, unknown> = {};
		const result = mixin.call(context, {
			inc: (value: number) => value + 1,
		});
		expect(result).toBe(context);
		expect((context.inc as (v: number) => number)(1)).toBe(2);
	});
});
