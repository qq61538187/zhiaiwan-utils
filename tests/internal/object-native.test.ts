import { describe, expect, it } from "vitest";
import {
	assignIn,
	assignInWith,
	assignWith,
	create,
	defaultsDeep,
	findLastKey,
	forIn,
	forInRight,
	forOwn,
	forOwnRight,
	functions,
	functionsIn,
	invertBy,
	invoke,
	keysIn,
	merge,
	mergeWith,
	setWith,
	toPairs,
	toPairsIn,
	transform,
	update,
	updateWith,
	valuesIn,
} from "../../src/internal/object-native";

describe("src/internal/object-native", () => {
	it("assign variants merge and honor customizer / unsafe keys", () => {
		const base = { a: 1 };
		const inherited = Object.create({ b: 2 });
		inherited.c = 3;
		expect(assignIn(base, inherited)).toEqual({ a: 1, b: 2, c: 3 });

		const polluted = assignIn({ safe: true }, { __proto__: { x: 1 } } as never);
		expect((polluted as Record<string, unknown>).safe).toBe(true);
		expect(({} as Record<string, unknown>).x).toBeUndefined();

		const withCustomizer = assignWith({ a: 1 }, { a: 2, b: 3 }, (current, value) =>
			current === undefined ? value : current,
		);
		expect(withCustomizer).toEqual({ a: 1, b: 3 });

		const inheritedWith = assignInWith(
			{ a: 1 },
			Object.assign(Object.create({ b: 2 }), { a: 4 }),
			(current, value) => (current === undefined ? value : current),
		);
		expect(inheritedWith).toEqual({ a: 1, b: 2 });
	});

	it("create/defaultsDeep/findLastKey and loop helpers work", () => {
		const proto = { x: 1 };
		const created = create(proto, {
			y: { value: 2, enumerable: true },
		});
		expect(Object.getPrototypeOf(created)).toBe(proto);
		expect(created.y).toBe(2);

		expect(defaultsDeep({ a: { b: 1 } }, { a: { b: 2, c: 3 } })).toEqual({
			a: { b: 1, c: 3 },
		});

		expect(findLastKey({ a: 1, b: 2, c: 3 }, (v: unknown) => Number(v) < 3)).toBe("b");
		expect(findLastKey(null, () => true)).toBeUndefined();

		const order: string[] = [];
		forIn({ a: 1, b: 2 }, (_v, key) => {
			order.push(key);
			if (key === "a") return false;
			return undefined;
		});
		expect(order).toEqual(["a"]);

		const rightOrder: string[] = [];
		forInRight({ a: 1, b: 2 }, (_v, key) => rightOrder.push(key));
		expect(rightOrder).toEqual(["b", "a"]);

		const ownOrder: string[] = [];
		forOwn({ a: 1, b: 2 }, (_v, key) => ownOrder.push(key));
		expect(ownOrder).toEqual(["a", "b"]);

		const ownRightOrder: string[] = [];
		forOwnRight({ a: 1, b: 2 }, (_v, key) => ownRightOrder.push(key));
		expect(ownRightOrder).toEqual(["b", "a"]);
	});

	it("collection/object helpers return expected shapes", () => {
		const obj = Object.assign(Object.create({ inheritedFn() {} }), {
			a() {},
			b: 1,
		});
		expect(functions(obj)).toEqual(["a"]);
		expect(functionsIn(obj)).toEqual(["a", "inheritedFn"]);
		expect(invertBy({ a: 1, b: 1, c: 2 })).toEqual({ 1: ["a", "b"], 2: ["c"] });
		expect(invoke({ a: { fn: (x: number) => x + 1 } }, "a.fn", 1)).toBe(2);
		expect(keysIn(Object.create({ a: 1 }))).toEqual(["a"]);
		expect(keysIn(null)).toEqual([]);
		expect(toPairs({ a: 1 })).toEqual([["a", 1]]);
		expect(toPairsIn(Object.assign(Object.create({ a: 1 }), { b: 2 }))).toEqual([
			["b", 2],
			["a", 1],
		]);
		expect(valuesIn(Object.assign(Object.create({ a: 1 }), { b: 2 }))).toEqual([2, 1]);
	});

	it("merge and path mutators cover deep branches", () => {
		const merged = merge({ a: [{ x: 1 }], b: { c: 1 } }, { a: [{ y: 2 }], b: { d: 2 } });
		expect(merged).toEqual({ a: [{ x: 1, y: 2 }], b: { c: 1, d: 2 } });

		const mergedWith = mergeWith({ a: [1] }, { a: [2] }, (left, right) =>
			Array.isArray(left) ? [...left, ...(right as number[])] : undefined,
		);
		expect(mergedWith).toEqual({ a: [1, 2] });

		const target: Record<string, unknown> = {};
		setWith(target, "a[0].b", 1, () => ({}));
		expect(target).toEqual({ a: { 0: { b: 1 } } });

		const transformed = transform(
			{ a: 1, b: 2 },
			(result: Record<string, number>, value: unknown, key: string) => {
				result[key] = Number(value) * 2;
			},
			{},
		);
		expect(transformed).toEqual({ a: 2, b: 4 });

		const updated = update({ a: { b: 1 } }, "a.b", (v) => (v as number) + 1);
		expect(updated).toEqual({ a: { b: 2 } });

		const updatedWith = updateWith(
			{} as Record<string, unknown>,
			"a.b",
			(v) => ((v as number | undefined) ?? 0) + 1,
			() => ({}),
		);
		expect(updatedWith).toEqual({ a: { b: 1 } });
	});
});
