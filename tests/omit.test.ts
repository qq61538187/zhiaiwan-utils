import { describe, expect, it } from "vitest";
import { omit } from "../src/omit";

describe("src/omit", () => {
	it("omits selected paths", () => {
		expect(omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 });
	});

	it("returns shallow clone when paths empty", () => {
		expect(omit({ a: 1 }, [])).toEqual({ a: 1 });
	});
});
