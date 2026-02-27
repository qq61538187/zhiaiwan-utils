import { describe, expect, it } from "vitest";
import {
	castArray,
	eq,
	gt,
	gte,
	isEmpty,
	isEqual,
	isNil,
	isNumber,
	isPlainObject,
	isString,
	lt,
	lte,
	toArray,
	toFinite,
	toInteger,
	toNumber,
	toString as toStringFn,
} from "../src/index";

describe("lang methods", () => {
	it("supports isNil", () => {
		expect(isNil(null)).toBe(true);
		expect(isNil(undefined)).toBe(true);
		expect(isNil(0)).toBe(false);
	});

	it("supports isEmpty", () => {
		expect(isEmpty([])).toBe(true);
		expect(isEmpty({})).toBe(true);
		expect(isEmpty("abc")).toBe(false);
	});

	it("supports isPlainObject, isNumber, isString", () => {
		expect(isPlainObject({ a: 1 })).toBe(true);
		expect(isPlainObject(new Date())).toBe(false);
		expect(isNumber(Number.NaN)).toBe(true);
		expect(isString(new String("a"))).toBe(true);
	});

	it("supports isEqual (method thin wrapper)", () => {
		expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
		expect(isEqual([1, 2], [1, 2])).toBe(true);
		expect(isEqual(1, 2)).toBe(false);
	});

	it("supports eq (SameValueZero)", () => {
		expect(eq(1, 1)).toBe(true);
		expect(eq(Number.NaN, Number.NaN)).toBe(true);
		expect(eq(0, -0)).toBe(true);
	});

	it("supports toArray and castArray", () => {
		expect(toArray({ a: 1, b: 2 })).toEqual([1, 2]);
		expect(castArray(1)).toEqual([1]);
		const input = [1, 2];
		expect(castArray(input)).toBe(input);
	});

	it("supports gt, gte, lt, lte", () => {
		expect(gt(2, 1)).toBe(true);
		expect(gte(2, 2)).toBe(true);
		expect(lt(1, 2)).toBe(true);
		expect(lte(1, 1)).toBe(true);
	});

	it("aligns toNumber/toFinite/toInteger edge cases", () => {
		expect(toNumber(" 0b101 ")).toBe(5);
		expect(toNumber(Object("3.2"))).toBe(3.2);
		expect(Number.isNaN(toNumber(Symbol("x")))).toBe(true);
		expect(toFinite(Number.POSITIVE_INFINITY)).toBe(Number.MAX_SAFE_INTEGER);
		expect(toFinite(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_SAFE_INTEGER);
		expect(toFinite(Number.NaN)).toBe(0);
		expect(toInteger(3.9)).toBe(3);
		expect(toInteger(-3.9)).toBe(-3);
	});

	it("keeps method-like toString semantics for null and -0", () => {
		expect(toStringFn(null)).toBe("");
		expect(toStringFn(undefined)).toBe("");
		expect(toStringFn(-0)).toBe("-0");
		expect(toStringFn([1, null, 3])).toBe("1,,3");
	});
});
