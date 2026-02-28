import { describe, expect, it } from "vitest";
import { camelCase } from "../src/camelCase";

describe("src/camelCase", () => {
	it("converts strings to camelCase", () => {
		expect(camelCase("Foo Bar")).toBe("fooBar");
		expect(camelCase("foo_bar-baz")).toBe("fooBarBaz");
	});
});
