import { describe, expect, it } from "vitest";
import {
	getAtPath,
	hasAtPath,
	invokeAtPath,
	setAtPath,
	toPathCore,
	unsetAtPath,
} from "../../src/internal/path-core";

describe("src/internal/path-core", () => {
	it("parses property paths", () => {
		expect(toPathCore("a[0].b['c']")).toEqual(["a", 0, "b", "c"]);
		expect(toPathCore("a[01]")).toEqual(["a", 1]);
		expect(toPathCore(["x", 1, "y"])).toEqual(["x", 1, "y"]);
	});

	it("gets values with default and unsafe guards", () => {
		const obj = { a: [{ b: 3 }], nil: null };
		expect(getAtPath(obj, "a[0].b")).toBe(3);
		expect(getAtPath(obj, "a[1].b", "fallback")).toBe("fallback");
		expect(getAtPath(obj, "__proto__.polluted", "safe")).toBe("safe");
		expect(getAtPath(obj, "nil.any", 0)).toBe(0);
	});

	it("checks own-path existence only", () => {
		const base = { deep: { value: 1 } };
		const obj = Object.create(base) as { own?: number; deep?: { value: number } };
		obj.own = 1;

		expect(hasAtPath(obj, [])).toBe(false);
		expect(hasAtPath(obj, "own")).toBe(true);
		expect(hasAtPath(obj, "deep.value")).toBe(false);
		expect(hasAtPath({ deep: { value: 1 } }, "deep.value")).toBe(true);
		expect(hasAtPath(obj, "__proto__.x")).toBe(false);
	});

	it("sets nested values and blocks unsafe segments", () => {
		const target: Record<string, unknown> = {};
		expect(setAtPath(target, "", 1)).toBe(target);

		setAtPath(target, "a[0].b", 9);
		expect(target).toEqual({ a: [{ b: 9 }] });

		setAtPath(target, "a[0].b", 10);
		expect(target).toEqual({ a: [{ b: 10 }] });

		setAtPath(target, "__proto__.polluted", "x");
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
	});

	it("unsets keys and array indexes safely", () => {
		const obj: Record<string, unknown> = { a: [{ b: 1 }, { b: 2 }] };
		unsetAtPath(obj, "a[0]");
		expect(obj).toEqual({ a: [{ b: 2 }] });

		unsetAtPath(obj, "a[0].b");
		expect(obj).toEqual({ a: [{}] });

		unsetAtPath(obj, "a[0].missing.x");
		expect(obj).toEqual({ a: [{}] });

		unsetAtPath(obj, "__proto__.x");
		expect(({} as Record<string, unknown>).x).toBeUndefined();
	});

	it("invokes methods by path with current as this", () => {
		const obj = {
			a: {
				value: 2,
				add(this: { value: number }, n: number) {
					return this.value + n;
				},
			},
		};

		expect(invokeAtPath(obj, "a.add", [3])).toBe(5);
		expect(invokeAtPath(obj, "a.missing", [1])).toBeUndefined();
		expect(invokeAtPath(obj, "a.value", [])).toBeUndefined();
		expect(invokeAtPath(obj, "__proto__.x", [])).toBeUndefined();
		expect(invokeAtPath(null, "a.add", [1])).toBeUndefined();
	});
});
