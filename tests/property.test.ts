import { describe, expect, it } from "vitest";
import { property } from "../src/property";

describe("src/property", () => {
	it("returns accessor for path", () => {
		const get = property("a.b");
		expect(get({ a: { b: 2 } })).toBe(2);
		expect(get({ a: {} })).toBeUndefined();
		expect(get(null)).toBeUndefined();
	});
});
