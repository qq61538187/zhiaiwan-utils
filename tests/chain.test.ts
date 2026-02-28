import { describe, expect, it } from "vitest";
import { chain } from "../src/chain";

describe("src/chain", () => {
	it("supports tap/thru/value and preserves wrapper semantics", () => {
		const calls: number[] = [];
		const wrapped = chain([1, 2])
			.tap((value) => {
				calls.push(value.length);
			})
			.thru((value) => value.concat(3));

		expect(calls).toEqual([2]);
		expect(wrapped.value()).toEqual([1, 2, 3]);
		expect(wrapped.valueOf()).toEqual([1, 2, 3]);
		expect(wrapped.toJSON()).toEqual([1, 2, 3]);
	});
});
