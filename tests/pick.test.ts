import { describe, expect, it } from "vitest";
import { pick } from "../src/pick";

describe("src/pick", () => {
	it("picks selected paths", () => {
		expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
	});

	it("ignores missing paths", () => {
		const input: Record<string, number> = { a: 1 };
		expect(pick(input, ["b"])).toEqual({});
	});
});
