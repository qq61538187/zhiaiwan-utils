import { describe, expect, it } from "vitest";
import { uniqBy } from "../src/uniqBy";

describe("src/uniqBy", () => {
	it("deduplicates by iteratee result", () => {
		expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
		expect(uniqBy([{ x: 1 }, { x: 1 }, { x: 2 }], "x")).toEqual([{ x: 1 }, { x: 2 }]);
	});
});
