import { describe, expect, it } from "vitest";
import { sortedLastIndexBy } from "../src/sortedLastIndexBy";

describe("src/sortedLastIndexBy", () => {
	it("returns last insertion index using iteratee", () => {
		expect(sortedLastIndexBy([{ x: 1 }, { x: 2 }, { x: 2 }], { x: 2 }, "x")).toBe(3);
		expect(sortedLastIndexBy([{ x: 1 }, { x: 2 }], { x: 0 }, "x")).toBe(0);
	});
});
