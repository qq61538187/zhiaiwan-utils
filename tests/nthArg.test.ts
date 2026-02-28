import { describe, expect, it } from "vitest";
import { nthArg } from "../src/nthArg";

describe("src/nthArg", () => {
	it("returns argument at index", () => {
		expect(nthArg(1)("a", "b", "c")).toBe("b");
	});

	it("supports negative index from end", () => {
		expect(nthArg(-1)("a", "b", "c")).toBe("c");
	});
});
