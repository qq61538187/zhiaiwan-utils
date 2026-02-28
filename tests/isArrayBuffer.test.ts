import { describe, expect, it } from "vitest";
import { isArrayBuffer } from "../src/isArrayBuffer";

describe("src/isArrayBuffer", () => {
	it("detects ArrayBuffer", () => {
		expect(isArrayBuffer(new ArrayBuffer(8))).toBe(true);
		expect(isArrayBuffer(new Uint8Array(8))).toBe(false);
	});
});
