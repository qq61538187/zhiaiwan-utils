import { describe, expect, it } from "vitest";
import { flip } from "../src/flip";

describe("src/flip", () => {
	it("reverses arguments order", () => {
		const fn = flip((a: string, b: string) => `${a}${b}`);
		expect(fn("A", "B")).toBe("BA");
		expect(flip((a?: string, b?: string) => `${a ?? "safe"}:${b ?? "safe"}`)("A")).toBe("A:safe");
	});
});
