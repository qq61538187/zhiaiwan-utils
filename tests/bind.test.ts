import { describe, expect, it } from "vitest";
import { bind } from "../src/bind";

describe("src/bind", () => {
	it("binds thisArg and prepends partial arguments", () => {
		const fn = bind(
			function (this: { base: string }, suffix: string, end: string) {
				return `${this.base}${suffix}${end}`;
			},
			{ base: "A" },
			"B",
		);
		expect(fn("C")).toBe("ABC");
	});
});
