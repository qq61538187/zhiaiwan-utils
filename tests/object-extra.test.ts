import { describe, expect, it } from "vitest";
import { at, get, has, hasIn, omit, result, set, unset } from "../src/index";

describe("object extra methods", () => {
	it("supports get and has for deep paths", () => {
		const source = { a: [{ b: 2 }] };
		expect(get(source, "a[0].b")).toBe(2);
		expect(get(source, "a[1].b", "fallback")).toBe("fallback");
		expect(has(source, "a[0].b")).toBe(true);
		expect(has(source, "a[1].b")).toBe(false);
	});

	it("supports set with path creation", () => {
		const target: Record<string, unknown> = {};
		set(target, "a[0].b", 3);
		expect(target).toEqual({ a: [{ b: 3 }] });
	});

	it("supports omit without mutating input", () => {
		const source = { a: 1, b: { c: 2, d: 3 } };
		const result = omit(source, ["b.c"]);
		expect(result).toEqual({ a: 1, b: { d: 3 } });
		expect(source).toEqual({ a: 1, b: { c: 2, d: 3 } });
	});

	it("supports omit with multiple paths", () => {
		const source = { a: 1, b: { c: 2, d: 3 }, e: 4 };
		expect(omit(source, ["a", "b.c", "missing.path"])).toEqual({
			b: { d: 3 },
			e: 4,
		});
	});

	it("supports unset and reports missing path", () => {
		const source = { a: [{ b: { c: 7 } }] };
		expect(unset(source, "a[0].b.c")).toBe(true);
		expect(source).toEqual({ a: [{ b: {} }] });
		expect(unset(source, "a[1].b.c")).toBe(false);
		expect(unset(null, "a.b")).toBe(true);
	});

	it("supports at and hasIn", () => {
		const proto = { a: { b: 2 } };
		const source = Object.create(proto) as Record<string, unknown>;
		source.list = [{ value: 3 }, { value: 4 }];
		expect(at(source, ["list[0].value", "a.b", "missing.path"])).toEqual([
			3,
			2,
			undefined,
		]);
		expect(has(source, "a.b")).toBe(false);
		expect(hasIn(source, "a.b")).toBe(true);
	});

	it("supports result for function values and defaults", () => {
		const source = {
			a: [{ b: { c: () => 3 } }],
			d: {
				value: 8,
				getter() {
					return this.value;
				},
			},
		};
		expect(result(source, "a[0].b.c")).toBe(3);
		expect(result(source, "d.getter")).toBe(8);
		expect(result(source, "d.value")).toBe(8);
		expect(result(source, "x.y", "fallback")).toBe("fallback");
		expect(result(source, "x.y", () => "dynamic")).toBe("dynamic");
	});
});
