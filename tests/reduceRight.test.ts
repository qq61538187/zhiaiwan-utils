import { describe, expect, it } from "vitest";
import { reduceRight } from "../src/reduceRight";

describe("src/reduceRight", () => {
	it("reduces from right for arrays and objects", () => {
		expect(reduceRight([1, 2, 3], (acc, v) => `${acc}${v}`, "")).toBe("321");
		expect(reduceRight({ a: 1, b: 2 }, (acc, v) => Number(acc) + Number(v), 0)).toBe(3);
	});

	it("returns accumulator for nullish collections", () => {
		expect(reduceRight(null, (acc, v) => Number(acc) + Number(v), 1)).toBe(1);
		expect(reduceRight(undefined, (acc, v) => Number(acc) + Number(v), 2)).toBe(2);
	});
});
