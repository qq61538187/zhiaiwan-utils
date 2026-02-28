import { describe, expect, it } from "vitest";
import { attempt } from "../src/attempt";

describe("src/attempt", () => {
	it("returns function result when no error is thrown", () => {
		expect(attempt((a: number, b: number) => a + b, 1, 2)).toBe(3);
	});

	it("returns thrown Error object", () => {
		const error = attempt(() => {
			throw new TypeError("x");
		});
		expect(error).toBeInstanceOf(TypeError);
		expect((error as Error).message).toBe("x");
	});

	it("wraps non-error throws into Error", () => {
		const error = attempt(() => {
			throw "boom";
		});
		expect(error).toBeInstanceOf(Error);
		expect((error as Error).message).toContain("boom");
	});
});
