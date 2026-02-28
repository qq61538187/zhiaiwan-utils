import { describe, expect, it } from "vitest";
import { sortedUniqBy } from "../src/sortedUniqBy";

describe("src/sortedUniqBy", () => {
	it("deduplicates by iteratee in sorted order", () => {
		expect(sortedUniqBy([{ x: 1 }, { x: 1 }, { x: 2 }], "x")).toEqual([{ x: 1 }, { x: 2 }]);
		expect(sortedUniqBy([], "x")).toEqual([]);
	});
});
