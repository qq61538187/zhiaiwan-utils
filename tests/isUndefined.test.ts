import { describe, expect, it } from "vitest";
import { isUndefined } from "../src/isUndefined";

describe("src/isUndefined", () => {
	it("checks undefined values only", () => {
		expect(isUndefined(undefined)).toBe(true);
		expect(isUndefined(null)).toBe(false);
		expect(isUndefined(0)).toBe(false);
	});
});
