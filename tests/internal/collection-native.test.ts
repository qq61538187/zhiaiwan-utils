import { describe, expect, it, vi } from "vitest";
import {
	find,
	flatMapDepth,
	forEach,
	invokeMap,
	orderBy,
	sampleSize,
} from "../../src/internal/collection-native";

describe("src/internal/collection-native", () => {
	it("handles forEach control flow and find with fromIndex", () => {
		const visited: number[] = [];
		forEach([1, 2, 3], (value) => {
			visited.push(Number(value));
			if (Number(value) === 2) {
				return false;
			}
			return undefined;
		});
		expect(visited).toEqual([1, 2]);
		expect(find([1, 2, 3], (v: unknown) => Number(v) > 1, 2)).toBe(3);
		expect(forEach(null, () => true)).toBeNull();
	});

	it("supports flatMapDepth/invokeMap/orderBy paths", () => {
		expect(flatMapDepth([1], () => [[[1]]], -1)).toEqual([[[1]]]);
		expect(
			invokeMap(
				[{ a: { add: (n: number) => n + 1 } }, { a: { add: (n: number) => n + 2 } }],
				"a.add",
				1,
			),
		).toEqual([2, 3]);
		expect(
			orderBy(
				[
					{ a: 1, b: 1 },
					{ a: 1, b: 2 },
				],
				["a", "b"],
				["asc", "desc"],
			),
		).toEqual([
			{ a: 1, b: 2 },
			{ a: 1, b: 1 },
		]);
	});

	it("produces deterministic sampleSize with mocked random", () => {
		const spy = vi.spyOn(Math, "random").mockReturnValue(0);
		expect(sampleSize([1, 2, 3], 2)).toEqual([2, 3]);
		spy.mockRestore();
	});
});
