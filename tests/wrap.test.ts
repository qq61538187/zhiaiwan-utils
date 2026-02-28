import { describe, expect, it } from "vitest";
import { wrap } from "../src/wrap";

describe("src/wrap", () => {
	it("passes value as first arg to wrapper", () => {
		const fn = wrap("x", (value, ...args: unknown[]) => `${value}${String(args[0])}`);
		expect(fn("y")).toBe("xy");
	});
});
