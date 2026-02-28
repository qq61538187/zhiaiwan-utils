import { describe, expect, it } from "vitest";
import { template } from "../src/template";

describe("src/template", () => {
	it("compiles and resolves nested keys", () => {
		const compiled = template("hello <%= user.name %>!");
		expect(compiled({ user: { name: "lxf" } })).toBe("hello lxf!");
	});

	it("returns empty string for missing or broken path", () => {
		const compiled = template("<%= a.b.c %>|<%= miss %>");
		expect(compiled({ a: null })).toBe("|");
		expect(compiled()).toBe("|");
	});
});
