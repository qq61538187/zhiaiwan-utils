import { describe, expect, it } from "vitest";
import { flow } from "../src/flow";

describe("src/flow", () => {
	it("composes functions left to right", () => {
		expect(
			flow(
				(n: number) => n + 1,
				(n: number) => n * 2,
			)(3),
		).toBe(8);
	});
});
