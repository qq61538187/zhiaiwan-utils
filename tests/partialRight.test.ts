import { describe, expect, it } from "vitest";
import { partialRight } from "../src/partialRight";

describe("src/partialRight", () => {
	it("appends partial arguments", () => {
		const fn = partialRight((a: string, b: string) => `${a}:${b}`, "B");
		expect(fn("A")).toBe("A:B");
	});
});
