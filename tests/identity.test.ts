import { describe, expect, it } from "vitest";
import { identity } from "../src/identity";

describe("src/identity", () => {
	it("returns the same value reference", () => {
		const value = { a: 1 };
		expect(identity(1)).toBe(1);
		expect(identity(value)).toBe(value);
	});
});
