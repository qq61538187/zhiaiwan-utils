import { describe, expect, it } from "vitest";
import { add } from "../src/add";

describe("src/add", () => {
	it("adds two values after numeric coercion", () => {
		expect(add(4, 6)).toBe(10);
		expect(add("4" as never, 6)).toBe(10);
	});
});
