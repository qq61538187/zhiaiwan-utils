import { describe, expect, it } from "vitest";
import { curryRight } from "../src/curryRight";

describe("src/curryRight", () => {
	it("applies collected args from right", () => {
		const fn = curryRight((a: string, b: string) => `${a}${b}`);
		expect(fn("b", "a")).toBe("ab");
	});
});
