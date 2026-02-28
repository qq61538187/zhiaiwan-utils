import { describe, expect, it } from "vitest";
import { subtract } from "../src/subtract";

describe("src/subtract", () => {
	it("subtracts values with numeric coercion", () => {
		expect(subtract(10, 3)).toBe(7);
		expect(subtract("10" as never, 4)).toBe(6);
	});
});
