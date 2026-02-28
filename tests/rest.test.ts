import { describe, expect, it } from "vitest";
import { rest } from "../src/rest";

describe("src/rest", () => {
	it("packs trailing args into rest array", () => {
		const fn = rest((prefix: string, items: string[]) => `${prefix}:${items.join(",")}`, 1);
		expect(fn("x", "a", "b")).toBe("x:a,b");
	});
});
