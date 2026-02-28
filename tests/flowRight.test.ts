import { describe, expect, it } from "vitest";
import { flowRight } from "../src/flowRight";

describe("src/flowRight", () => {
	it("composes functions right to left", () => {
		expect(
			flowRight(
				(n: number) => n * 2,
				(n: number) => n + 1,
			)(3),
		).toBe(8);
	});
});
