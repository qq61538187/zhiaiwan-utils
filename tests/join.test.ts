import { describe, expect, it } from "vitest";
import { join } from "../src/join";

describe("src/join", () => {
	it("joins array with separator", () => {
		expect(join([1, 2, 3], "-")).toBe("1-2-3");
		expect(join([1, 2, 3])).toBe("1,2,3");
	});
});
