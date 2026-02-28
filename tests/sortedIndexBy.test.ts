import { describe, expect, it } from "vitest";
import { sortedIndexBy } from "../src/sortedIndexBy";

describe("src/sortedIndexBy", () => {
	it("returns insertion index using iteratee", () => {
		expect(sortedIndexBy([{ x: 1 }, { x: 3 }], { x: 2 }, "x")).toBe(1);
		expect(sortedIndexBy([{ x: 1 }, { x: 3 }], { x: 0 }, "x")).toBe(0);
	});
});
