import { describe, expect, it } from "vitest";
import { noConflict } from "../src/noConflict";

describe("src/noConflict", () => {
	it("restores previous global when current matches thisArg", () => {
		const key = "zhiaiwanUtils";
		const current = { x: 1 };
		(globalThis as Record<string, unknown>)[key] = current;
		expect(noConflict.call(current)).toBe(current);
		expect((globalThis as Record<string, unknown>)[key]).toBeUndefined();
	});

	it("returns current global value when thisArg is undefined", () => {
		const key = "zhiaiwanUtils";
		(globalThis as Record<string, unknown>)[key] = { y: 1 };
		const result = noConflict.call(undefined);
		expect(result).toEqual({ y: 1 });
		expect((globalThis as Record<string, unknown>)[key]).toBeUndefined();
	});
});
