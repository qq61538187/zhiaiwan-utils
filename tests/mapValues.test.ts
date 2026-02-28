import { describe, expect, it } from "vitest";
import { mapValues } from "../src/mapValues";

describe("src/mapValues", () => {
	it("maps values with iteratee", () => {
		expect(mapValues({ a: 1, b: 2 }, (value) => Number(value) * 2)).toEqual({
			a: 2,
			b: 4,
		});
	});

	it("supports default identity iteratee and nullish input", () => {
		expect(mapValues({ a: 1 })).toEqual({ a: 1 });
		expect(mapValues(null, "a")).toEqual({});
	});
});
