import { describe, expect, it } from "vitest";
import { split } from "../src/split";

describe("src/split", () => {
	it("splits with separator and limit", () => {
		expect(split("a-b-c", "-")).toEqual(["a", "b", "c"]);
		expect(split("a-b-c", "-", 2)).toEqual(["a", "b"]);
	});

	it("handles undefined separator and negative limit", () => {
		expect(split("abc")).toEqual(["abc"]);
		expect(split("a-b", "-", -1)).toEqual([]);
	});
});
