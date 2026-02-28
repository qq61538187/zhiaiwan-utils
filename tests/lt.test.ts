import { describe, expect, it } from "vitest";
import { lt } from "../src/lt";

describe("src/lt", () => {
	it("checks less-than comparison", () => {
		expect(lt(1, 2)).toBe(true);
		expect(lt(2, 2)).toBe(false);
	});
});
