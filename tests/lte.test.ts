import { describe, expect, it } from "vitest";
import { lte } from "../src/lte";

describe("src/lte", () => {
	it("checks less-than-or-equal comparison", () => {
		expect(lte(1, 2)).toBe(true);
		expect(lte(2, 2)).toBe(true);
		expect(lte(3, 2)).toBe(false);
	});
});
