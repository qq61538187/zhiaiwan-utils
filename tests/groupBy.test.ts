import { describe, expect, it } from "vitest";
import { groupBy } from "../src/groupBy";

describe("src/groupBy", () => {
	it("groups values by iteratee result", () => {
		expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			4: [4.2],
			6: [6.1, 6.3],
		});
	});

	it("returns empty object for nullish collection", () => {
		expect(groupBy(null, "a")).toEqual({});
	});
});
