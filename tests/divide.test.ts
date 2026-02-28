import { describe, expect, it } from "vitest";
import { divide } from "../src/divide";

describe("src/divide", () => {
	it("divides values with numeric coercion", () => {
		expect(divide(8, 2)).toBe(4);
		expect(divide("9" as never, 3)).toBe(3);
	});
});
