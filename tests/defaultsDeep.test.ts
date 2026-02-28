import { describe, expect, it } from "vitest";
import { defaultsDeep } from "../src/defaultsDeep";

describe("src/defaultsDeep", () => {
	it("fills nested undefined values deeply", () => {
		const target = { a: { b: undefined } };
		expect(defaultsDeep(target, { a: { b: 2, c: 3 } })).toEqual({ a: { b: 2, c: 3 } });
	});
});
