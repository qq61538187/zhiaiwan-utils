import { describe, expect, it } from "vitest";
import { trimStart } from "../src/trimStart";

describe("src/trimStart", () => {
	it("trims whitespace or custom chars from start", () => {
		expect(trimStart("  abc  ")).toBe("abc  ");
		expect(trimStart("-_-abc", "_-")).toBe("abc");
	});
});
