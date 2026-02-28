import { describe, expect, it } from "vitest";
import { constant } from "../src/constant";

describe("src/constant", () => {
	it("returns a function that always returns original value", () => {
		const object = { a: 1 };
		const fn = constant(object);
		expect(fn()).toBe(object);
		expect(fn()).toBe(object);
	});
});
