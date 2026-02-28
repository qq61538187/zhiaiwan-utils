import { describe, expect, it } from "vitest";
import { findKey } from "../src/findKey";

describe("src/findKey", () => {
	it("finds first matching own key", () => {
		expect(findKey({ a: 1, b: 2 }, (v) => Number(v) > 1)).toBe("b");
	});

	it("supports iteratee shorthands", () => {
		expect(findKey({ a: { x: 1 }, b: { x: 2 } }, ["x", 2])).toBe("b");
		expect(findKey({ a: { enabled: 0 }, b: { enabled: 1 } }, "enabled")).toBe("b");
	});

	it("supports default identity behavior and nullish input", () => {
		expect(findKey({ a: 0, b: 2 })).toBe("b");
		expect(findKey(null, () => true)).toBeUndefined();
		expect(findKey({ a: 0 }, (v) => Number(v) > 1)).toBeUndefined();
	});
});
