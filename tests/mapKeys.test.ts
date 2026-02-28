import { describe, expect, it } from "vitest";
import { mapKeys } from "../src/mapKeys";

describe("src/mapKeys", () => {
	it("maps object keys with iteratee", () => {
		expect(mapKeys({ a: 1, b: 2 }, (_v, key) => `${key}_x`)).toEqual({
			a_x: 1,
			b_x: 2,
		});
	});

	it("supports default identity iteratee and nullish input", () => {
		expect(mapKeys({ a: 1 })).toEqual({ "1": 1 });
		expect(mapKeys(null, "a")).toEqual({});
	});
});
