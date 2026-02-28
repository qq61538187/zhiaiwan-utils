import { describe, expect, it } from "vitest";
import { unescape as unescapeFn } from "../src/unescape";

describe("src/unescape", () => {
	it("unescapes html entities", () => {
		expect(unescapeFn("&lt;div&gt;&amp;&#39;&quot;")).toBe("<div>&'\"");
		expect(unescapeFn("plain")).toBe("plain");
	});
});
