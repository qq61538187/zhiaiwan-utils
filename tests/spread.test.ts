import { describe, expect, it } from "vitest";
import { spread } from "../src/spread";

describe("src/spread", () => {
	it("spreads array argument at start index", () => {
		const fn = spread((a: string, b: string) => `${a}:${b}`);
		expect(fn(["A", "B"])).toBe("A:B");
	});

	it("passes non-array as single value", () => {
		const fn = spread((a: unknown, b: unknown) => `${String(a)}:${String(b)}`);
		expect(fn(undefined, "x")).toBe("undefined:x");
	});
});
