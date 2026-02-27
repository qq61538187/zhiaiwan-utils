import { describe, expect, it } from "vitest";
import {
	add,
	ceil,
	divide,
	floor,
	max,
	min,
	multiply,
	round,
	subtract,
	sum,
	sumBy,
} from "../src/index";

describe("math methods", () => {
	it("add returns sum", () => {
		expect(add(1, 2)).toBe(3);
	});

	it("sum returns sum of array", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});

	it("sumBy uses iteratee", () => {
		expect(sumBy([{ n: 1 }, { n: 2 }], (o: { n: number }) => o.n)).toBe(3);
	});

	it("subtract, multiply, divide (method semantics)", () => {
		expect(subtract(5, 2)).toBe(3);
		expect(multiply(2, 3)).toBe(6);
		expect(divide(6, 2)).toBe(3);
	});

	it("max and min", () => {
		expect(max([1, 3, 2])).toBe(3);
		expect(max([])).toBeUndefined();
		expect(min([1, 3, 2])).toBe(1);
	});

	it("ceil, floor, round", () => {
		expect(ceil(4.006)).toBe(5);
		expect(floor(4.006)).toBe(4);
		expect(round(4.006, 2)).toBe(4.01);
	});
});
