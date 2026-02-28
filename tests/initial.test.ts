import { describe, expect, it } from "vitest";
import { initial } from "../src/initial";

describe("src/initial", () => {
	it("returns all but last element", () => {
		expect(initial([1, 2, 3])).toEqual([1, 2]);
		expect(initial([1])).toEqual([]);
	});
});
