import { describe, expect, it } from "vitest";
import { findLastKey } from "../src/findLastKey";

describe("src/findLastKey", () => {
	it("returns last key matching predicate", () => {
		expect(
			findLastKey({ a: { n: 1 }, b: { n: 2 } }, (v: unknown) => (v as { n: number }).n > 1),
		).toBe("b");
	});

	it("returns undefined when none matches", () => {
		expect(findLastKey({ a: 1 }, (v: unknown) => Number(v) > 1)).toBeUndefined();
	});
});
