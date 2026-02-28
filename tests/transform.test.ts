import { describe, expect, it } from "vitest";
import { transform } from "../src/transform";

describe("src/transform", () => {
	it("transforms object values into accumulator", () => {
		expect(
			transform(
				{ a: 1, b: 2 },
				(result: Record<string, number>, value: unknown, key: string) => {
					result[key] = Number(value) * 2;
				},
				{},
			),
		).toEqual({ a: 2, b: 4 });
	});

	it("uses default accumulator and supports early break", () => {
		expect(
			transform([1, 2, 3], (result: number[], value: unknown) => {
				result.push(Number(value));
				if (Number(value) === 2) {
					return false;
				}
				return undefined;
			}),
		).toEqual([1, 2]);
	});
});
