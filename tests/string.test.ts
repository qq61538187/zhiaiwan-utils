import { describe, expect, it } from "vitest";
import {
	camelCase,
	capitalize,
	kebabCase,
	parseInt as parseIntUtil,
	snakeCase,
	startCase,
	template,
	trim,
	truncate,
	words,
} from "../src/index";

describe("string methods", () => {
	it("supports camelCase, kebabCase, snakeCase", () => {
		expect(camelCase("Foo Bar")).toBe("fooBar");
		expect(kebabCase("Foo Bar")).toBe("foo-bar");
		expect(snakeCase("Foo Bar")).toBe("foo_bar");
	});

	it("supports capitalize and trim", () => {
		expect(capitalize("FRED")).toBe("Fred");
		expect(trim("  abc  ")).toBe("abc");
		expect(trim("-_-abc-_-", "_-")).toBe("abc");
	});

	it("supports words/startCase/truncate boundaries", () => {
		expect(words("fred, barney, & pebbles")).toEqual([
			"fred",
			"barney",
			"pebbles",
		]);
		expect(startCase("__foo_bar__")).toBe("Foo Bar");
		expect(truncate("hi-diddly-ho there, neighborino", { length: 24 })).toBe(
			"hi-diddly-ho there, n...",
		);
		expect(
			truncate("hi-diddly-ho there, neighborino", {
				length: 24,
				separator: " ",
			}),
		).toBe("hi-diddly-ho there,...");
	});

	it("supports basic template interpolation", () => {
		const compiled = template("hello <%= user.name %>!");
		expect(compiled({ user: { name: "fred" } })).toBe("hello fred!");
	});

	it("aligns parseInt radix edge cases", () => {
		expect(parseIntUtil("08")).toBe(8);
		expect(parseIntUtil("0x10")).toBe(16);
		expect(parseIntUtil("11", 2)).toBe(3);
	});
});
