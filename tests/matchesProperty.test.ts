import { describe, expect, it } from "vitest";
import { matchesProperty } from "../src/matchesProperty";

describe("src/matchesProperty", () => {
	it("matches value at path", () => {
		const predicate = matchesProperty("a.b", 2);
		expect(predicate({ a: { b: 2 } })).toBe(true);
		expect(predicate({ a: { b: 3 } })).toBe(false);
	});
});
