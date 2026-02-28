import { describe, expect, it } from "vitest";
import { endsWith } from "../src/endsWith";

describe("src/endsWith", () => {
	it("matches suffix with optional position", () => {
		expect(endsWith("abc", "c")).toBe(true);
		expect(endsWith("abc", "b", 2)).toBe(true);
		expect(endsWith("abc", "a", -1)).toBe(false);
	});
});
