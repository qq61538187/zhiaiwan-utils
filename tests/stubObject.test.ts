import { describe, expect, it } from "vitest";
import { stubObject } from "../src/stubObject";

describe("src/stubObject", () => {
	it("returns a new empty object each call", () => {
		const first = stubObject();
		const second = stubObject();
		expect(first).toEqual({});
		expect(second).toEqual({});
		expect(first).not.toBe(second);
	});
});
