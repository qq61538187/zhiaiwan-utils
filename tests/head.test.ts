import { describe, expect, it } from "vitest";
import { head } from "../src/head";

describe("src/head", () => {
	it("returns first element or undefined", () => {
		expect(head([1, 2, 3])).toBe(1);
		expect(head([])).toBeUndefined();
	});
});
