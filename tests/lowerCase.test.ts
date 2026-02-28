import { describe, expect, it } from "vitest";
import { lowerCase } from "../src/lowerCase";

describe("src/lowerCase", () => {
	it("converts phrase to lower case words", () => {
		expect(lowerCase("FooBar")).toBe("foobar");
		expect(lowerCase("FOO_bar-baz")).toBe("foo bar baz");
	});
});
