import { describe, expect, it } from "vitest";
import { words } from "../src/words";

describe("src/words", () => {
	it("splits string into words", () => {
		expect(words("foo, bar baz")).toEqual(["foo", "bar", "baz"]);
	});

	it("supports string and regexp patterns", () => {
		expect(words("a|b|c", "|")).toEqual(["a", "b", "c"]);
		expect(words("a1 b2", /\w\d/g)).toEqual(["a1", "b2"]);
	});
});
