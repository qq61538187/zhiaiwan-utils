import { describe, expect, it } from "vitest";
import { matches } from "../src/matches";

describe("src/matches", () => {
	it("creates predicate for deep partial comparison", () => {
		const predicate = matches({ a: 1, b: { c: 2 } });
		expect(predicate({ a: 1, b: { c: 2 }, d: 3 })).toBe(true);
		expect(predicate({ a: 1, b: { c: 3 } })).toBe(false);
	});
});
