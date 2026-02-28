import { describe, expect, it } from "vitest";
import { functionsIn } from "../src/functionsIn";

describe("src/functionsIn", () => {
	it("returns function names from own + inherited enumerable keys", () => {
		const proto = { b() {} };
		const obj = Object.create(proto) as { a: () => number; c: number };
		obj.a = () => 1;
		obj.c = 1;
		expect(functionsIn(obj)).toEqual(["a", "b"]);
	});
});
