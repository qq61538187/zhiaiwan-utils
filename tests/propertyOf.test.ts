import { describe, expect, it } from "vitest";
import { propertyOf } from "../src/propertyOf";

describe("src/propertyOf", () => {
	it("returns accessor bound to object", () => {
		const getFrom = propertyOf({ a: { b: 2 } });
		expect(getFrom("a.b")).toBe(2);
		expect(getFrom("a.c")).toBeUndefined();
		expect(propertyOf(null)("a.b")).toBeUndefined();
	});
});
