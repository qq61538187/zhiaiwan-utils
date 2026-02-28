import { describe, expect, it } from "vitest";
import { eachRight } from "../src/eachRight";

describe("src/eachRight", () => {
	it("aliases forEachRight behavior", () => {
		const visited: number[] = [];
		eachRight([1, 2], (v: unknown) => visited.push(Number(v)));
		expect(visited).toEqual([2, 1]);
	});
});
