import { describe, expect, it } from "vitest";
import { forIn } from "../src/forIn";

describe("src/forIn", () => {
	it("iterates own and inherited enumerable keys", () => {
		const proto = { p: 1 };
		const obj = Object.create(proto) as { a: number };
		obj.a = 2;
		const keys: string[] = [];
		forIn(obj, (_v: unknown, key: string) => keys.push(key));
		expect(keys).toEqual(["a", "p"]);
	});
});
