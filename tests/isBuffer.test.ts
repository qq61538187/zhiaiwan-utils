import { describe, expect, it } from "vitest";
import { isBuffer } from "../src/isBuffer";

describe("src/isBuffer", () => {
	it("checks node Buffer values", () => {
		expect(isBuffer(Buffer.from("x"))).toBe(true);
		expect(isBuffer(new Uint8Array([1, 2]))).toBe(false);
	});

	it("returns false for non-buffer values", () => {
		expect(isBuffer("x")).toBe(false);
		expect(isBuffer(null)).toBe(false);
	});
});
