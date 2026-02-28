import { describe, expect, it } from "vitest";
import { toIterateeCore } from "../../src/internal/iteratee-core";

describe("src/internal/iteratee-core", () => {
	it("returns function iteratee as-is", () => {
		const fn = (value: number) => value + 1;
		expect(toIterateeCore(fn)(1, 0, [1])).toBe(2);
	});

	it("supports [path, value] matcher", () => {
		const iteratee = toIterateeCore<{ a: { b: number } }, boolean>(["a.b", 2]);
		expect(iteratee({ a: { b: 2 } }, 0, [{ a: { b: 2 } }])).toBe(true);
		expect(iteratee({ a: { b: 3 } }, 0, [{ a: { b: 3 } }])).toBe(false);
	});

	it("supports object matcher and non-object input", () => {
		const iteratee = toIterateeCore<{ a: number; b: number }, boolean>({
			a: 1,
			b: 2,
		});
		expect(iteratee({ a: 1, b: 2 }, 0, [{ a: 1, b: 2 }])).toBe(true);
		expect(iteratee({ a: 1, b: 3 }, 0, [{ a: 1, b: 3 }])).toBe(false);
		expect(iteratee(1 as never, 0, [1 as never])).toBe(false);
	});

	it("supports property path getter fallback", () => {
		const iteratee = toIterateeCore<{ user: { name: string } }, string>("user.name");
		expect(iteratee({ user: { name: "lxf" } }, 0, [{ user: { name: "lxf" } }])).toBe("lxf");
	});
});
