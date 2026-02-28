import { describe, expect, it } from "vitest";
import { forOwnRight } from "../src/forOwnRight";

describe("src/forOwnRight", () => {
	it("iterates own keys in reverse order", () => {
		const obj = { a: 1, b: 2 };
		const keys: string[] = [];
		forOwnRight(obj, (_v: unknown, key: string) => keys.push(key));
		expect(keys).toEqual(["b", "a"]);
	});
});
