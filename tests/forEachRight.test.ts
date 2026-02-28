import { describe, expect, it } from "vitest";
import { forEachRight } from "../src/forEachRight";

describe("src/forEachRight", () => {
	it("iterates array from right to left", () => {
		const visited: number[] = [];
		forEachRight([1, 2, 3], (v: unknown) => {
			visited.push(Number(v));
		});
		expect(visited).toEqual([3, 2, 1]);
	});

	it("supports object iteration", () => {
		const visited: number[] = [];
		forEachRight({ a: 1, b: 2 }, (v: unknown) => visited.push(Number(v)));
		expect(visited).toEqual([2, 1]);
	});
});
