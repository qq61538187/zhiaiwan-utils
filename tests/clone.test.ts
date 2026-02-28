import { describe, expect, it } from "vitest";
import { clone } from "../src/clone";

describe("src/clone", () => {
	it("creates shallow clone for arrays and objects", () => {
		const arr = [1, 2];
		const obj = { a: 1 };
		expect(clone(arr)).toEqual(arr);
		expect(clone(arr)).not.toBe(arr);
		expect(clone(obj)).toEqual(obj);
		expect(clone(obj)).not.toBe(obj);
	});
});
