import { describe, expect, it } from "vitest";
import { forEach } from "../src/forEach";

describe("src/forEach", () => {
	it("iterates array from left to right", () => {
		const visited: number[] = [];
		forEach([1, 2, 3], (v: unknown) => {
			visited.push(Number(v));
		});
		expect(visited).toEqual([1, 2, 3]);
	});

	it("supports object iteration", () => {
		const visited: number[] = [];
		forEach({ a: 1, b: 2 }, (v: unknown) => visited.push(Number(v)));
		expect(visited).toEqual([1, 2]);
	});
});
