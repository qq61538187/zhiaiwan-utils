import { describe, expect, it } from "vitest";
import { at, get, has, hasIn, omit, result, toPath, unset } from "../src/index";

describe("object path compatibility", () => {
	it("supports array path form consistently", () => {
		const source = { a: [{ b: { c: 3 } }] };
		expect(get(source, ["a", 0, "b", "c"])).toBe(3);
		expect(has(source, ["a", 0, "b", "c"])).toBe(true);
		expect(at(source, [["a", 0, "b", "c"]])).toEqual([3]);
		expect(result(source, ["a", 0, "b", "c"])).toBe(3);
		expect(omit(source, [["a", 0, "b", "c"]])).toEqual({ a: [{ b: {} }] });
	});

	it("supports nullish object input for query methods", () => {
		expect(get(null, "a.b", "fallback")).toBe("fallback");
		expect(get(undefined, ["a", "b"], "fallback")).toBe("fallback");
		expect(has(null, "a.b")).toBe(false);
		expect(hasIn(undefined, "a.b")).toBe(false);
		expect(at(null, ["a", "b"])).toEqual([undefined, undefined]);
		expect(result(undefined, "a.b", () => "fallback")).toBe("fallback");
		expect(
			omit(null as unknown as Record<PropertyKey, unknown>, ["a"]),
		).toEqual({});
		expect(unset(undefined, "a.b")).toBe(true);
	});

	it("supports symbol segment in array path", () => {
		const token = Symbol("token");
		const source = { [token]: { deep: 1 } };
		expect(toPath([token, "deep"])).toEqual([token, "deep"]);
		expect(get(source, [token, "deep"])).toBe(1);
		expect(has(source, [token, "deep"])).toBe(true);
	});

	it("distinguishes own and inherited path checks", () => {
		const proto = { cfg: { port: 13001 } };
		const source = Object.create(proto) as Record<string, unknown>;
		source.self = { ok: true };
		expect(has(source, "cfg.port")).toBe(false);
		expect(hasIn(source, "cfg.port")).toBe(true);
		expect(has(source, "self.ok")).toBe(true);
	});
});
