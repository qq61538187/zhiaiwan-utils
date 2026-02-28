import { describe, expect, it } from "vitest";
import { reject } from "../src/reject";

describe("src/reject", () => {
	it("rejects values matching predicate", () => {
		expect(reject([1, 2, 3], (v: unknown) => Number(v) > 1)).toEqual([1]);
		expect(reject({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1)).toEqual([1]);
	});

	it("returns empty for nullish collection", () => {
		expect(reject(null, () => true)).toEqual([]);
	});
});
