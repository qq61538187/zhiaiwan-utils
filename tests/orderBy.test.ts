import { describe, expect, it } from "vitest";
import { orderBy } from "../src/orderBy";

describe("src/orderBy", () => {
	it("orders by iteratees and orders list", () => {
		const source = [
			{ a: 1, b: 2 },
			{ a: 1, b: 1 },
			{ a: 2, b: 1 },
		];
		expect(orderBy(source, ["a", "b"], ["asc", "desc"])).toEqual([
			{ a: 1, b: 2 },
			{ a: 1, b: 1 },
			{ a: 2, b: 1 },
		]);
		expect(orderBy(source, ["a"], ["desc"])).toEqual([
			{ a: 2, b: 1 },
			{ a: 1, b: 2 },
			{ a: 1, b: 1 },
		]);
	});

	it("returns empty for nullish collection", () => {
		expect(orderBy(null, ["a"], ["asc"])).toEqual([]);
	});
});
