import { describe, expect, it } from "vitest";
import { isUnsafePropertyKey } from "../../src/internal/security-core";

describe("src/internal/security-core", () => {
	it("detects unsafe property keys", () => {
		expect(isUnsafePropertyKey("__proto__")).toBe(true);
		expect(isUnsafePropertyKey("constructor")).toBe(true);
		expect(isUnsafePropertyKey("prototype")).toBe(true);
	});

	it("allows safe or non-string keys", () => {
		expect(isUnsafePropertyKey("safe")).toBe(false);
		expect(isUnsafePropertyKey(Symbol("x"))).toBe(false);
	});
});
