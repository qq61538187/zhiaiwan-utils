import { describe, expect, it } from "vitest";
import { minBy } from "../src/minBy";

describe("src/minBy", () => {
	it("returns min-scoring element or undefined", () => {
		expect(minBy([{ n: 2 }, { n: 4 }], "n")).toEqual({ n: 2 });
		expect(minBy([] as Array<{ n: number }>, "n")).toBeUndefined();
	});
});
