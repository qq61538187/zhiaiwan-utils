import { describe, expect, it } from "vitest";
import { isNull } from "../src/isNull";

describe("src/isNull", () => {
	it("checks null only", () => {
		expect(isNull(null)).toBe(true);
		expect(isNull(undefined)).toBe(false);
		expect(isNull(0)).toBe(false);
	});
});
