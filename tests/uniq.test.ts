import { describe, expect, it } from "vitest";
import { uniq } from "../src/uniq";

describe("src/uniq", () => {
	it("deduplicates by SameValueZero semantics", () => {
		expect(uniq([1, 2, 1, Number.NaN, Number.NaN])).toEqual([1, 2, Number.NaN]);
	});
});
