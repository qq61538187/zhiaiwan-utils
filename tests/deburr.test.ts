import { describe, expect, it } from "vitest";
import { deburr } from "../src/deburr";

describe("src/deburr", () => {
	it("removes diacritical marks", () => {
		expect(deburr("déjà vu")).toBe("deja vu");
		expect(deburr("cafe")).toBe("cafe");
	});
});
