import { describe, expect, it } from "vitest";
import * as moduleRef from "../../src/internal/string-native";

describe("src/internal/string-native", () => {
	it("covers casing, pad and split branches", () => {
		expect(moduleRef.deburr("déjà")).toBe("deja");
		expect(moduleRef.endsWith("abc", "b", 2)).toBe(true);
		expect(moduleRef.escapeRegExp("a+b")).toBe("a\\+b");
		expect(moduleRef.lowerCase("FooBar")).toBe("foobar");
		expect(moduleRef.lowerFirst("Foo")).toBe("foo");
		expect(moduleRef.pad("ab", 5, "0")).toBe("0ab00");
		expect(moduleRef.padEnd("ab", 4, "")).toBe("ab  ");
		expect(moduleRef.padStart("ab", 4, "")).toBe("  ab");
		expect(moduleRef.parseInt("0x10")).toBe(16);
		expect(moduleRef.repeat("a", -1)).toBe("");
		expect(moduleRef.replace("abc", "b", "x")).toBe("axc");
		expect(moduleRef.split("abc")).toEqual(["abc"]);
		expect(moduleRef.split("a-b-c", "-", 2)).toEqual(["a", "b"]);
		expect(moduleRef.startCase("fooBar")).toBe("Foobar");
		expect(moduleRef.startsWith("abc", "c", 2)).toBe(true);
	});

	it("covers template trim truncate and words branches", () => {
		const compiled = moduleRef.template("hello <%= user.name %> / <%= miss %>");
		expect(compiled({ user: { name: "lxf" } })).toBe("hello lxf / ");
		expect(moduleRef.toLower("ABC")).toBe("abc");
		expect(moduleRef.toUpper("abc")).toBe("ABC");
		expect(moduleRef.trimEnd("ab--", "-")).toBe("ab");
		expect(moduleRef.trimStart("--ab", "-")).toBe("ab");
		expect(moduleRef.truncate("abcdef", { length: 4 })).toBe("a...");
		expect(moduleRef.truncate("hello world test", { length: 11, separator: " " })).toBe("hello...");
		expect(moduleRef.truncate("hello world test", { length: 11, separator: /\s+/ })).toBe(
			"hello...",
		);
		expect(moduleRef.unescape("&lt;a&gt;&amp;")).toBe("<a>&");
		expect(moduleRef.upperCase("fooBar")).toBe("FOOBAR");
		expect(moduleRef.upperFirst("foo")).toBe("Foo");
		expect(moduleRef.words("a,b,c", /[^,]+/g)).toEqual(["a", "b", "c"]);
		expect(moduleRef.words("a|b|c", "|")).toEqual(["a", "b", "c"]);
	});
});
