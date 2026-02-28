import { describe, expect, it } from "vitest";
import { each } from "../src/each";

describe("src/each", () => {
	it("aliases forEach behavior", () => {
		const visited: number[] = [];
		each([1, 2], (v: unknown) => visited.push(Number(v)));
		expect(visited).toEqual([1, 2]);
	});
});
