import { describe, expect, it } from "vitest";
import { stubArray } from "../src/stubArray";

describe("src/stubArray", () => {
	it("returns a new empty array each call", () => {
		const first = stubArray();
		const second = stubArray();
		expect(first).toEqual([]);
		expect(second).toEqual([]);
		expect(first).not.toBe(second);
	});
});
