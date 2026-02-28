import { describe, expect, it } from "vitest";
import { isTypedArray } from "../src/isTypedArray";

describe("src/isTypedArray", () => {
	it("checks typed array views", () => {
		expect(isTypedArray(new Uint8Array([1, 2]))).toBe(true);
		expect(isTypedArray(new Int16Array([1, 2]))).toBe(true);
	});

	it("excludes DataView and non-view values", () => {
		expect(isTypedArray(new DataView(new ArrayBuffer(8)))).toBe(false);
		expect(isTypedArray([])).toBe(false);
		expect(isTypedArray(new ArrayBuffer(8))).toBe(false);
	});
});
