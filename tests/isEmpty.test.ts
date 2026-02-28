import { describe, expect, it } from "vitest";
import { isEmpty } from "../src/isEmpty";

describe("src/isEmpty", () => {
	it("handles nullish and collection values", () => {
		expect(isEmpty(null)).toBe(true);
		expect(isEmpty(undefined)).toBe(true);
		expect(isEmpty([])).toBe(true);
		expect(isEmpty([1])).toBe(false);
		expect(isEmpty("")).toBe(true);
		expect(isEmpty("x")).toBe(false);
		expect(isEmpty(new Map())).toBe(true);
		expect(isEmpty(new Map([["a", 1]]))).toBe(false);
		expect(isEmpty(new Set())).toBe(true);
		expect(isEmpty(new Set([1]))).toBe(false);
	});

	it("handles plain and non-plain objects", () => {
		expect(isEmpty({})).toBe(true);
		expect(isEmpty({ a: 1 })).toBe(false);
		expect(isEmpty(Object.create(null))).toBe(true);
		expect(isEmpty(Object.create({ a: 1 }))).toBe(false);
		expect(isEmpty(new Date())).toBe(false);
		expect(isEmpty(() => undefined)).toBe(false);
	});
});
