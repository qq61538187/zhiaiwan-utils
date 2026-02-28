import { describe, expect, it } from "vitest";
import { trim } from "../src/trim";

describe("src/trim", () => {
	it("trims whitespace by default", () => {
		expect(trim("  abc  ")).toBe("abc");
		expect(trim("")).toBe("");
	});

	it("trims custom chars and keeps value when chars is empty", () => {
		expect(trim("-_-abc-_-", "_-")).toBe("abc");
		expect(trim("abc", "")).toBe("abc");
	});

	it("normalizes non-string inputs via String()", () => {
		expect(trim(1 as unknown as string)).toBe("1");
	});
});
