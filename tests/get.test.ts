import { describe, expect, it } from "vitest";
import { get } from "../src/get";

describe("src/get", () => {
	it("gets nested value and supports default", () => {
		expect(get({ a: [{ b: 2 }] }, "a[0].b")).toBe(2);
		expect(get({ a: [{ b: 2 }] }, "a[1].b", "fallback")).toBe("fallback");
	});

	it("returns default for nullish and unsafe path", () => {
		expect(get(null, "a.b", "safe")).toBe("safe");
		expect(get({ safe: true }, "__proto__.x", "safe")).toBe("safe");
	});
});
