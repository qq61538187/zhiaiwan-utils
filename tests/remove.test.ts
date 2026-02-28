import { describe, expect, it } from "vitest";
import { remove } from "../src/remove";

describe("src/remove", () => {
	it("removes values matched by predicate", () => {
		const source = [1, 2, 3, 4];
		expect(remove(source, (v: unknown) => Number(v) % 2 === 0)).toEqual([2, 4]);
		expect(source).toEqual([1, 3]);
	});

	it("supports iteratee shorthand", () => {
		const source = [{ a: 1 }, { a: 0 }];
		expect(remove(source, "a")).toEqual([{ a: 1 }]);
	});
});
