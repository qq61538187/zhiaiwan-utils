import { describe, expect, it } from "vitest";
import { runInContext } from "../src/runInContext";

describe("src/runInContext", () => {
	it("creates instance from bound this target", () => {
		const source = { a: 1 };
		const scoped = runInContext.call(source, {});
		expect(scoped.a).toBe(1);
		expect(scoped).not.toBe(source);
	});

	it("creates instance from context global target", () => {
		const context = { zhiaiwanUtils: { x: 1 } } as Record<PropertyKey, unknown>;
		const scoped = runInContext(context);
		expect(scoped.x).toBe(1);
		expect(scoped).not.toBe(context.zhiaiwanUtils);
	});

	it("falls back to default scoped object when no targets", () => {
		const scoped = runInContext({});
		expect(typeof scoped.runInContext).toBe("function");
	});
});
