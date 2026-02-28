import { describe, expect, it } from "vitest";
import { sortBy } from "../src/sortBy";

describe("src/sortBy", () => {
	it("sorts by iteratee and preserves source", () => {
		const source = [{ a: 2 }, { a: 1 }];
		const sorted = sortBy(source, ["a"]);
		expect(sorted).toEqual([{ a: 1 }, { a: 2 }]);
		expect(source).toEqual([{ a: 2 }, { a: 1 }]);
	});

	it("supports single iteratee and nullish collection", () => {
		expect(sortBy([{ a: 2 }, { a: 1 }], "a")).toEqual([{ a: 1 }, { a: 2 }]);
		expect(sortBy(null, "a")).toEqual([]);
	});
});
