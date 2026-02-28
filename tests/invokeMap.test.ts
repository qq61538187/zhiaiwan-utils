import { describe, expect, it } from "vitest";
import { invokeMap } from "../src/invokeMap";

describe("src/invokeMap", () => {
	it("invokes method path on each item", () => {
		expect(
			invokeMap(
				[{ a: { add: (n: number) => n + 1 } }, { a: { add: (n: number) => n + 2 } }],
				"a.add",
				1,
			),
		).toEqual([2, 3]);
	});

	it("returns empty for nullish collection", () => {
		expect(invokeMap(null, "a.b")).toEqual([]);
	});
});
