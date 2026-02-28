import { describe, expect, it } from "vitest";
import { negate } from "../src/negate";

describe("src/negate", () => {
	it("negates predicate result", () => {
		const isNotEven = negate((n: number) => n % 2 === 0);
		expect(isNotEven(3)).toBe(true);
		expect(isNotEven(2)).toBe(false);
	});
});
