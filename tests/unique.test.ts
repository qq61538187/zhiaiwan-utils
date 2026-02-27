import { describe, expect, it } from "vitest";
import { unique } from "../src/unique";

describe("unique", () => {
	it("removes duplicate values", () => {
		expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
	});

	it("keeps reference uniqueness for objects", () => {
		const a = { id: 1 };
		const b = { id: 1 };
		expect(unique([a, a, b])).toEqual([a, b]);
	});
});
