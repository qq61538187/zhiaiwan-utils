import { describe, expect, it } from "vitest";
import { reduce } from "../src/reduce";

describe("src/reduce", () => {
	it("reduces array with initial accumulator", () => {
		expect(reduce([1, 2, 3], (acc, v) => Number(acc) + Number(v), 0)).toBe(6);
	});

	it("uses first item as accumulator when omitted", () => {
		expect(reduce([1, 2, 3], (acc, v) => Number(acc) + Number(v))).toBe(6);
	});

	it("supports object collections and empty guard", () => {
		expect(reduce({ a: 1, b: 2 }, (acc, v) => Number(acc) + Number(v), 0)).toBe(3);
		expect(() => reduce([] as number[], (acc, v) => Number(acc) + Number(v))).toThrow(
			"Reduce of empty collection with no initial value",
		);
		expect(reduce([] as number[], (acc, v) => Number(acc) + Number(v), 10)).toBe(10);
	});
});
