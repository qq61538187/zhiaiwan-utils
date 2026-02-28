import { describe, expect, it } from "vitest";
import { isMatch } from "../src/isMatch";

describe("src/isMatch", () => {
	it("checks that source properties match object", () => {
		expect(isMatch({ a: 1, b: 2 }, { a: 1 })).toBe(true);
		expect(isMatch({ a: 1, b: 2 }, { a: 2 })).toBe(false);
	});
});
