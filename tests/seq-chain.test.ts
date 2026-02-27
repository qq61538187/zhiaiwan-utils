import { describe, expect, it } from "vitest";
import { chain } from "../src/index";

describe("seq chain behavior", () => {
	it("supports tap/thru with method-like chain value semantics", () => {
		const touched: number[] = [];
		const wrapped = chain([1, 2, 3])
			.tap((list) => {
				touched.push((list as number[]).length);
			})
			.thru((list) => (list as number[]).map((n) => n * 2));

		expect(touched).toEqual([3]);
		expect(wrapped.value()).toEqual([2, 4, 6]);
		expect(wrapped.valueOf()).toEqual([2, 4, 6]);
		expect(wrapped.toJSON()).toEqual([2, 4, 6]);
	});
});
