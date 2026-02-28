import { describe, expect, it } from "vitest";
import { pickBy } from "../src/pickBy";

describe("src/pickBy", () => {
	it("picks properties by predicate", () => {
		expect(pickBy({ a: 1, b: 0, c: 2 }, (v: unknown) => Number(v) > 0)).toEqual({
			a: 1,
			c: 2,
		});
	});

	it("returns empty object for nullish", () => {
		expect(pickBy(null, () => true)).toEqual({});
	});
});
