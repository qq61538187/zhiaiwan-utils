import { describe, expect, it } from "vitest";
import { unary } from "../src/unary";

describe("src/unary", () => {
	it("forwards only the first argument", () => {
		const fn = unary((value: string) => Number(value));
		expect(fn("2", "ignored")).toBe(2);
		expect(Number.isNaN(fn(undefined as unknown as string, "ignored"))).toBe(true);
	});
});
