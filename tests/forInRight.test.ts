import { describe, expect, it } from "vitest";
import { forInRight } from "../src/forInRight";

describe("src/forInRight", () => {
	it("iterates own and inherited keys in reverse", () => {
		const proto = { p: 1 };
		const obj = Object.create(proto) as { a: number };
		obj.a = 2;
		const keys: string[] = [];
		forInRight(obj, (_v: unknown, key: string) => keys.push(key));
		expect(keys).toEqual(["p", "a"]);
	});
});
