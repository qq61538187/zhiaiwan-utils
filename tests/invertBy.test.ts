import { describe, expect, it } from "vitest";
import { invertBy } from "../src/invertBy";

describe("src/invertBy", () => {
	it("groups keys by default stringified value", () => {
		expect(invertBy({ a: 1, b: 1, c: 2 })).toEqual({
			1: ["a", "b"],
			2: ["c"],
		});
	});

	it("supports custom iteratee", () => {
		const grouped = invertBy({ a: 1, b: 2, c: 3 }, (v) => (Number(v) % 2 === 0 ? "even" : "odd"));
		expect(grouped).toEqual({
			odd: ["a", "c"],
			even: ["b"],
		});
	});

	it("supports symbol group keys and empty input", () => {
		const symbolKey = Symbol("g");
		const grouped = invertBy({ a: 1, b: 2 }, () => symbolKey);
		expect(grouped[symbolKey]).toEqual(["a", "b"]);
		expect(invertBy({})).toEqual({});
	});
});
