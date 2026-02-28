import { describe, expect, it } from "vitest";
import { kebabCase } from "../src/kebabCase";

describe("src/kebabCase", () => {
	it("converts text to kebab-case", () => {
		expect(kebabCase("Foo Bar_baz")).toBe("foo-bar-baz");
	});
});
