import { describe, expect, it } from "vitest";
import { create } from "../src/create";

describe("src/create", () => {
	it("creates object with prototype and properties", () => {
		const proto = { a: 1 };
		const obj = create(proto, { b: { value: 2, enumerable: true } });
		expect(Object.getPrototypeOf(obj)).toBe(proto);
		expect(obj).toEqual({ b: 2 });
		expect((obj as { a: number }).a).toBe(1);
	});
});
