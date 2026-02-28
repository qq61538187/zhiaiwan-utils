import { describe, expect, it } from "vitest";
import { stubTrue } from "../src/stubTrue";

describe("src/stubTrue", () => {
	it("always returns true", () => {
		expect(stubTrue()).toBe(true);
	});
});
