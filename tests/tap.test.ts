import { describe, expect, it } from "vitest";
import { tap } from "../src/tap";

describe("src/tap", () => {
	it("runs interceptor and returns original value", () => {
		const arr = [1, 2, 3];
		const result = tap(arr, (value) => {
			value.pop();
		});
		expect(result).toBe(arr);
		expect(result).toEqual([1, 2]);
	});
});
