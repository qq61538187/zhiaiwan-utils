import { describe, expect, it } from "vitest";
import { tail } from "../src/tail";

describe("src/tail", () => {
	it("returns all except first element", () => {
		expect(tail([1, 2, 3])).toEqual([2, 3]);
		expect(tail([])).toEqual([]);
	});
});
