import { describe, expect, it } from "vitest";
import { defaults } from "../src/defaults";

describe("src/defaults", () => {
	it("fills undefined keys from sources in order", () => {
		const target: Record<string, unknown> = { a: 1, b: undefined };
		expect(defaults(target, { a: 3, b: 2 }, { b: 4, c: 5 })).toEqual({
			a: 1,
			b: 2,
			c: 5,
		});
	});
});
