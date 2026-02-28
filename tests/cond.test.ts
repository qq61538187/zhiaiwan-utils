import { describe, expect, it } from "vitest";
import { cond } from "../src/cond";

describe("src/cond", () => {
	it("invokes first matched branch", () => {
		const fn = cond<number[], string>([
			[(n) => n > 0, () => "positive"],
			[(n) => n < 0, () => "negative"],
			[() => true, () => "zero"],
		]);
		expect(fn(1)).toBe("positive");
		expect(fn(-1)).toBe("negative");
		expect(fn(0)).toBe("zero");
	});

	it("returns undefined when no predicate matches", () => {
		const fn = cond<number[], string>([[(n) => n > 0, () => "positive"]]);
		expect(fn(0)).toBeUndefined();
	});
});
