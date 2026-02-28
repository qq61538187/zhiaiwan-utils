import { describe, expect, it } from "vitest";
import { maxBy } from "../src/maxBy";

describe("src/maxBy", () => {
	it("returns max-scoring element or undefined", () => {
		expect(maxBy([{ n: 1 }, { n: 3 }], "n")).toEqual({ n: 3 });
		expect(maxBy([] as Array<{ n: number }>, "n")).toBeUndefined();
	});
});
