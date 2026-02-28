import { describe, expect, it } from "vitest";
import { escapeRegExp } from "../src/escapeRegExp";

describe("src/escapeRegExp", () => {
	it("escapes regex metacharacters", () => {
		expect(escapeRegExp("[a-z]+(x)?")).toBe("\\[a-z\\]\\+\\(x\\)\\?");
	});
});
