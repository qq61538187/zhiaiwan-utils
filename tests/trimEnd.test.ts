import { describe, expect, it } from "vitest";
import { trimEnd } from "../src/trimEnd";

describe("src/trimEnd", () => {
	it("trims whitespace or custom chars from end", () => {
		expect(trimEnd("  abc  ")).toBe("  abc");
		expect(trimEnd("abc-_-", "_-")).toBe("abc");
	});
});
