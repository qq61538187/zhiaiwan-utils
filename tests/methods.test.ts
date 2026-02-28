import { describe, expect, it } from "vitest";
import { methods } from "../src/methods";

describe("src/methods", () => {
	it("returns own function keys only", () => {
		expect(methods({ a: () => 1, b: 2, c: function c() {} })).toEqual(["a", "c"]);
	});
});
