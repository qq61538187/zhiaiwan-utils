import { describe, expect, it } from "vitest";
import { lowerFirst } from "../src/lowerFirst";

describe("src/lowerFirst", () => {
	it("lowercases first character only", () => {
		expect(lowerFirst("Fred")).toBe("fred");
		expect(lowerFirst("")).toBe("");
	});
});
