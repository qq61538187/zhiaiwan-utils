import { describe, expect, it } from "vitest";
import { upperCase } from "../src/upperCase";

describe("src/upperCase", () => {
	it("converts phrase to upper case words", () => {
		expect(upperCase("fooBar")).toBe("FOOBAR");
		expect(upperCase("foo_bar-baz")).toBe("FOO BAR BAZ");
	});
});
