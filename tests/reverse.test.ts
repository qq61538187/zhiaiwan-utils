import { describe, expect, it } from "vitest";
import { reverse } from "../src/reverse";

describe("src/reverse", () => {
	it("reverses array in place", () => {
		const source = [1, 2, 3];
		expect(reverse(source)).toBe(source);
		expect(source).toEqual([3, 2, 1]);
	});
});
