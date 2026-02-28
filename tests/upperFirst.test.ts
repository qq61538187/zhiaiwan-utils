import { describe, expect, it } from "vitest";
import { upperFirst } from "../src/upperFirst";

describe("src/upperFirst", () => {
	it("uppercases first character only", () => {
		expect(upperFirst("fred")).toBe("Fred");
		expect(upperFirst("")).toBe("");
	});
});
