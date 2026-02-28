import { describe, expect, it } from "vitest";
import { pullAllBy } from "../src/pullAllBy";

describe("src/pullAllBy", () => {
	it("removes by iteratee-computed key", () => {
		const source = [{ x: 1 }, { x: 2 }, { x: 1 }];
		expect(pullAllBy(source, [{ x: 1 }], "x")).toEqual([{ x: 2 }]);
		expect(source).toEqual([{ x: 2 }]);
	});
});
