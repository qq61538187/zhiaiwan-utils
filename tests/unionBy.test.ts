import { describe, expect, it } from "vitest";
import { unionBy } from "../src/unionBy";

describe("src/unionBy", () => {
	it("unions values by iteratee result", () => {
		expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
		expect(unionBy([{ x: 1 }], [{ x: 1 }, { x: 2 }], "x")).toEqual([{ x: 1 }, { x: 2 }]);
	});
});
