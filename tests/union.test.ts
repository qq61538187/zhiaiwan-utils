import { describe, expect, it } from "vitest";
import { union } from "../src/union";

describe("src/union", () => {
	it("returns unique values across arrays", () => {
		expect(union([2], [1, 2], [3])).toEqual([2, 1, 3]);
	});

	it("skips non-array arguments", () => {
		expect(union([1, 2], null as never, [2, 3])).toEqual([1, 2, 3]);
	});
});
