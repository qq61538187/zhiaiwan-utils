import { describe, expect, it } from "vitest";
import { methodsIn } from "../src/methodsIn";

describe("src/methodsIn", () => {
	it("includes inherited function keys", () => {
		const proto = { p() {} };
		const obj = Object.create(proto) as { a: () => number };
		obj.a = () => 1;
		expect(methodsIn(obj)).toEqual(["a", "p"]);
	});
});
