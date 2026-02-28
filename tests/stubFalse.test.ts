import { describe, expect, it } from "vitest";
import { stubFalse } from "../src/stubFalse";

describe("src/stubFalse", () => {
	it("always returns false", () => {
		expect(stubFalse()).toBe(false);
	});
});
