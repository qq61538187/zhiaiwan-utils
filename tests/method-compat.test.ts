import { describe, expect, it } from "vitest";
import {
	countBy,
	get,
	groupBy,
	hasIn,
	includes,
	iteratee,
	map,
	matchesProperty,
	result,
	set,
	size,
	toPath,
	unset,
} from "../src/index";

describe("method compatibility edge cases", () => {
	it("supports bracket/quoted path forms", () => {
		const source = { a: [{ "b.c": { d: 1 } }] };
		expect(toPath('a[0]["b.c"].d')).toEqual(["a", 0, "b.c", "d"]);
		expect(get(source, 'a[0]["b.c"].d')).toBe(1);
	});

	it("supports path create/unset roundtrip", () => {
		const target: Record<string, unknown> = {};
		set(target, "x[0].y.z", 10);
		expect(target).toEqual({ x: [{ y: { z: 10 } }] });
		expect(unset(target, "x[0].y.z")).toBe(true);
		expect(target).toEqual({ x: [{ y: {} }] });
	});

	it("supports iteratee object/pair shorthands in collection calls", () => {
		const users = [
			{ id: 1, role: "admin" },
			{ id: 2, role: "user" },
			{ id: 3, role: "admin" },
		];

		expect(map(users, "id")).toEqual([1, 2, 3]);
		expect(groupBy(users, "role")).toEqual({
			admin: [
				{ id: 1, role: "admin" },
				{ id: 3, role: "admin" },
			],
			user: [{ id: 2, role: "user" }],
		});
		expect(iteratee(["role", "admin"])(users[0])).toBe(true);
		expect(matchesProperty("role", "admin")(users[2])).toBe(true);
	});

	it("supports prototype-path lookup and result invocation parity", () => {
		const proto = { config: { getPort: () => 13001 } };
		const source = Object.create(proto) as Record<string, unknown>;
		expect(hasIn(source, "config.getPort")).toBe(true);
		expect(result(source, "config.getPort")).toBe(13001);
		expect(result(source, "config.unknown", () => 13002)).toBe(13002);
	});

	it("supports numeric-string keys and sparse arrays in collection methods", () => {
		const sparse = new Array<number | undefined>(3);
		sparse[0] = 1;
		sparse[2] = 3;
		expect(size({ "0": "a", "1": "b" })).toBe(2);
		expect(includes(sparse, undefined)).toBe(true);
		expect(countBy([{ "1": "x" }, { "1": "y" }], "1")).toEqual({
			x: 1,
			y: 1,
		});
		expect(groupBy([{ "2": "a" }, { "2": "a" }], "2")).toEqual({
			a: [{ "2": "a" }, { "2": "a" }],
		});
	});

	it("guards against __proto__ path pollution access", () => {
		const target: Record<string, unknown> = {};
		set(target, "__proto__.polluted", "x");
		set(target, "constructor.prototype.polluted2", "x");
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(({} as Record<string, unknown>).polluted2).toBeUndefined();
		expect(get(target, "__proto__.polluted")).toBeUndefined();
		expect(get(target, "constructor.prototype.polluted2")).toBeUndefined();
	});
});
