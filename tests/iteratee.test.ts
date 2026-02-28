import { describe, expect, it } from "vitest";
import { iteratee } from "../src/iteratee";

describe("src/iteratee", () => {
	it("supports function and property-path shorthands", () => {
		expect(iteratee((v: number) => v + 1)(1)).toBe(2);
		expect(iteratee("a.b")({ a: { b: 3 } })).toBe(3);
	});

	it("supports [path, value] and object matcher shorthands", () => {
		expect(iteratee(["a.b", 2])({ a: { b: 2 } })).toBe(true);
		expect(iteratee({ a: { b: 1 } })({ a: { b: 1 } })).toBe(true);
		expect(iteratee({ a: { b: 1 } })({ a: { b: 2 } })).toBe(false);
	});

	it("returns identity iteratee for nullish func", () => {
		const fn = iteratee(null);
		expect(fn(3)).toBe(3);
	});
});
