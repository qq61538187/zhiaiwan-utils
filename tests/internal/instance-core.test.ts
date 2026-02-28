import { describe, expect, it } from "vitest";
import {
	attachWrapperMethod,
	createUtilsInstance,
	ensureWrapperSupport,
	getGlobalUtilsTarget,
	setGlobalUtilsTarget,
	utilsGlobalKey,
} from "../../src/internal/instance-core";

describe("src/internal/instance-core", () => {
	it("adds chain/tap/thru support and keeps idempotent", () => {
		const target = {};
		const enhanced = ensureWrapperSupport(target) as Record<string, unknown>;
		expect(enhanced).toBe(target);
		expect(typeof enhanced.chain).toBe("function");

		const wrapped = (
			enhanced.chain as (v: number) => {
				value: () => number;
				thru: (interceptor: (value: unknown) => unknown) => unknown;
				tap: (interceptor: (value: unknown) => unknown) => unknown;
			}
		)(2);
		expect(wrapped.value()).toBe(2);
		expect((wrapped.thru((v) => Number(v) + 1) as { value: () => number }).value()).toBe(3);
		expect((wrapped.tap(() => undefined) as { value: () => number }).value()).toBe(3);
		expect(ensureWrapperSupport(target)).toBe(target);
	});

	it("attaches wrapper method and respects chain flag", () => {
		const target = ensureWrapperSupport(createUtilsInstance()) as Record<string, unknown>;
		attachWrapperMethod(target, "double", (value: unknown) => Number(value) * 2, true);
		attachWrapperMethod(target, "rawDouble", (value: unknown) => Number(value) * 2, false);

		const chainValue = (
			target.chain as (v: number) => { double: () => unknown; value: () => number }
		)(2);
		expect((chainValue.double() as { value: () => number }).value()).toBe(4);

		const rawValue = (target.chain as (v: number) => { rawDouble: () => number })(2);
		expect(rawValue.rawDouble()).toBe(4);
	});

	it("no-ops attachWrapperMethod when support not initialized", () => {
		const fn = () => 1;
		expect(() => attachWrapperMethod(fn, "x", () => 1)).not.toThrow();
	});

	it("creates instance copy and supports global target helpers", () => {
		const source = { a: 1 };
		const instance = createUtilsInstance(source);
		expect(instance.a).toBe(1);
		expect(instance).not.toBe(source);

		const context: Record<PropertyKey, unknown> = {};
		expect(getGlobalUtilsTarget(context)).toBeUndefined();
		setGlobalUtilsTarget(instance, context);
		expect(getGlobalUtilsTarget(context)).toBe(instance);
		expect(utilsGlobalKey).toBe("zhiaiwanUtils");
	});
});
