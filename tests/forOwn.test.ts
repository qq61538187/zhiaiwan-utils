import { describe, expect, it } from "vitest";
import { forOwn } from "../src/forOwn";

describe("src/forOwn", () => {
	it("iterates own enumerable keys only", () => {
		const proto = { p: 1 };
		const obj = Object.create(proto) as { a: number };
		obj.a = 2;
		const keys: string[] = [];
		forOwn(obj, (_v: unknown, key: string) => keys.push(key));
		expect(keys).toEqual(["a"]);
	});
});
