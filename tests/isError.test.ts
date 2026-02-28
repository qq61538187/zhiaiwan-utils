import { describe, expect, it } from "vitest";
import { isError } from "../src/isError";

describe("src/isError", () => {
	it("checks error instances and tagged error objects", () => {
		expect(isError(new Error("x"))).toBe(true);
		expect(isError({ [Symbol.toStringTag]: "TypeError" })).toBe(true);
	});

	it("returns false for regular values", () => {
		expect(isError({ message: "x" })).toBe(false);
		expect(isError("x")).toBe(false);
	});
});
