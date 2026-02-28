import { describe, expect, it } from "vitest";
import { stubString } from "../src/stubString";

describe("src/stubString", () => {
	it("always returns empty string", () => {
		expect(stubString()).toBe("");
	});
});
