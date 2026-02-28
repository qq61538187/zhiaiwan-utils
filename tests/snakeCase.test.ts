import { describe, expect, it } from "vitest";
import { snakeCase } from "../src/snakeCase";

describe("src/snakeCase", () => {
	it("converts strings to snake_case", () => {
		expect(snakeCase("Foo Bar")).toBe("foo_bar");
		expect(snakeCase("foo-bar-baz")).toBe("foo_bar_baz");
	});
});
