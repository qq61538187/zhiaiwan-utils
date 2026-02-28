import { describe, expect, it } from "vitest";
import * as moduleRef from "../../src/internal/lang-native";

describe("src/internal/lang-native", () => {
	it("covers clone and deep-clone branches", () => {
		expect(moduleRef.castArray()).toEqual([]);
		expect(moduleRef.castArray([1, 2])).toEqual([1, 2]);
		expect(moduleRef.castArray(1)).toEqual([1]);

		expect(moduleRef.clone([1, 2])).toEqual([1, 2]);
		expect(moduleRef.clone(new Date(1))).toEqual(new Date(1));
		expect(moduleRef.clone(new Map([["a", 1]]))).toEqual(new Map([["a", 1]]));
		expect(moduleRef.clone(new Set([1]))).toEqual(new Set([1]));
		expect(moduleRef.clone(Uint8Array.from([1]))).toEqual(Uint8Array.from([1]));
		expect(moduleRef.clone({ a: 1 })).toEqual({ a: 1 });

		const circular: { self?: unknown; a: number } = { a: 1 };
		circular.self = circular;
		const deep = moduleRef.cloneDeep(circular) as { self: unknown; a: number };
		expect(deep.a).toBe(1);
		expect(deep.self).toBe(deep);

		expect(moduleRef.cloneWith(1, () => 2)).toBe(2);
		expect(
			moduleRef.cloneDeepWith({ a: 1 }, (v) => (typeof v === "number" ? v + 1 : undefined)),
		).toEqual({ a: 2 });
	});

	it("covers predicate/comparison and match branches", () => {
		expect(moduleRef.conformsTo({ a: 1 }, { a: (v) => Number(v) > 0 })).toBe(true);
		expect(moduleRef.conformsTo({ a: 0 }, { a: (v) => Number(v) > 0 })).toBe(false);
		expect(
			moduleRef.conformsTo({ a: 1 }, { a: true as unknown as (value: unknown) => boolean }),
		).toBe(false);

		expect(moduleRef.eq(Number.NaN, Number.NaN)).toBe(true);
		expect(moduleRef.gt(2, 1)).toBe(true);
		expect(moduleRef.gte(2, 2)).toBe(true);
		expect(moduleRef.lt(1, 2)).toBe(true);
		expect(moduleRef.lte(1, 1)).toBe(true);

		expect(moduleRef.isMatch({ a: 1 }, { a: 1 })).toBe(true);
		expect(moduleRef.isMatch({ a: 1 }, { a: 2 })).toBe(false);
		expect(moduleRef.isMatchWith({ a: 1 }, { a: 2 }, () => true)).toBe(true);
		expect(moduleRef.isMatchWith({ a: 1 }, { a: 2 }, () => false)).toBe(false);
		expect(moduleRef.isMatchWith({ a: 1 }, { a: 1 })).toBe(true);
	});

	it("covers conversion and type-check branches", () => {
		expect(moduleRef.isArrayLike("ab")).toBe(true);
		expect(moduleRef.isArrayLike(() => undefined)).toBe(false);
		expect(moduleRef.isBoolean(new Boolean(true))).toBe(true);
		expect(moduleRef.isElement({ nodeType: 1 })).toBe(true);
		expect(moduleRef.isNative(Array.prototype.push)).toBe(true);
		expect(moduleRef.isSymbol(Object(Symbol("x")))).toBe(true);
		expect(moduleRef.isTypedArray(new DataView(new ArrayBuffer(8)))).toBe(false);

		expect(moduleRef.toArray(null)).toEqual([]);
		expect(moduleRef.toArray("ab")).toEqual(["a", "b"]);
		expect(moduleRef.toArray(new Map([["a", 1]]))).toEqual([1]);
		expect(moduleRef.toArray(new Set([1, 2]))).toEqual([1, 2]);
		expect(moduleRef.toArray({ a: 1 })).toEqual([1]);

		expect(moduleRef.toNumber(Symbol("x"))).toSatisfy(Number.isNaN);
		expect(moduleRef.toFinite(Number.POSITIVE_INFINITY)).toBe(Number.MAX_SAFE_INTEGER);
		expect(moduleRef.toFinite(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_SAFE_INTEGER);
		expect(moduleRef.toInteger(-1.9)).toBe(-1);
		expect(moduleRef.toLength(-1)).toBe(0);
		expect(moduleRef.toLength(Number.MAX_SAFE_INTEGER)).toBe(4294967295);
		expect(moduleRef.toPlainObject(null)).toEqual({});
		expect(moduleRef.toSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER);
		expect(moduleRef.toString([-0, Symbol("x")])).toContain("-0");
	});
});
