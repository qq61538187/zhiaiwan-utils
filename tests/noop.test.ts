import { describe, expect, it } from "vitest";
import { noop } from "../src/noop";

describe("src/noop", () => {
	it("always returns undefined", () => {
		expect(noop()).toBeUndefined();
	});
});
