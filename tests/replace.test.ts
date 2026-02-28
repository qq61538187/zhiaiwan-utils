import { describe, expect, it } from "vitest";
import { replace } from "../src/replace";

describe("src/replace", () => {
	it("replaces string and regexp matches", () => {
		expect(replace("a-b-c", "-", "_")).toBe("a_b-c");
		expect(replace("a-b-c", /-/g, "_")).toBe("a_b_c");
	});
});
