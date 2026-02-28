import { describe, expect, it } from "vitest";
import { unique } from "../src/unique";

describe("src/unique", () => {
	it("aliases uniq behavior", () => {
		expect(unique([1, 2, 1, Number.NaN, Number.NaN])).toEqual([1, 2, Number.NaN]);
	});
});
