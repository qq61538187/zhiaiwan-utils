import { describe, expect, it } from "vitest";
import { overArgs } from "../src/overArgs";

describe("src/overArgs", () => {
	it("transforms arguments before invoke", () => {
		const fn = overArgs(
			(a: number, b: number) => a + b,
			(v) => Number(v) * 2,
			(v) => Number(v) + 1,
		);
		expect(fn(2, 3)).toBe(8);
	});
});
