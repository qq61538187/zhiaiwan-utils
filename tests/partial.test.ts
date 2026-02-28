import { describe, expect, it } from "vitest";
import { partial } from "../src/partial";

describe("src/partial", () => {
	it("prepends partial arguments", () => {
		const fn = partial((a: string, b: string) => `${a}:${b}`, "A");
		expect(fn("B")).toBe("A:B");
	});
});
