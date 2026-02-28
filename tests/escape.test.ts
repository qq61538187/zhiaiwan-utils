import { describe, expect, it } from "vitest";
import { escape as escapeFn } from "../src/escape";

describe("src/escape", () => {
	it("escapes html-sensitive characters", () => {
		expect(escapeFn("<div>&\"'</div>")).toBe("&lt;div&gt;&amp;&quot;&#39;&lt;/div&gt;");
	});
});
