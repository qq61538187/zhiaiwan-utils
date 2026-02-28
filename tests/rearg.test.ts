import { describe, expect, it } from "vitest";
import { rearg } from "../src/rearg";

describe("src/rearg", () => {
	it("reorders arguments by indexes", () => {
		const fn = rearg((a: string, b: string) => `${a}:${b}`, [1, 0]);
		expect(fn("A", "B")).toBe("B:A");
	});
});
