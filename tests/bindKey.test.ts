import { describe, expect, it } from "vitest";
import { bindKey } from "../src/bindKey";

describe("src/bindKey", () => {
	it("binds object method by key and prepends args", () => {
		const object = {
			x: 2,
			add(this: { x: number }, n: number) {
				return this.x + n;
			},
		};
		expect(bindKey(object, "add", 3)()).toBe(5);
	});

	it("throws when target key is not a function", () => {
		expect(() => bindKey({} as never, "missing")()).toThrow("bindKey target is not a function");
	});
});
