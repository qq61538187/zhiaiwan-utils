import { describe, expect, it } from "vitest";
import { countBy } from "../src/countBy";

describe("src/countBy", () => {
	it("counts values by iteratee result", () => {
		expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 1, 6: 2 });
		expect(countBy([{ a: 1 }, { a: 1 }, { a: 2 }], "a")).toEqual({
			1: 2,
			2: 1,
		});
	});
});
