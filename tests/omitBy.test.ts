import { describe, expect, it } from "vitest";
import { omitBy } from "../src/omitBy";

describe("src/omitBy", () => {
	it("omits properties by predicate", () => {
		expect(omitBy({ a: 1, b: 0, c: 2 }, (v: unknown) => Number(v) === 0)).toEqual({
			a: 1,
			c: 2,
		});
	});

	it("returns empty object for nullish", () => {
		expect(omitBy(null, () => false)).toEqual({});
	});
});
