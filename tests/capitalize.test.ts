import { describe, expect, it } from "vitest";
import { capitalize } from "../src/capitalize";

describe("src/capitalize", () => {
	it("capitalizes first letter and lowers rest", () => {
		expect(capitalize("fRED")).toBe("Fred");
		expect(capitalize("")).toBe("");
	});
});
