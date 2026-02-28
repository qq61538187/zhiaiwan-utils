import { describe, expect, it } from "vitest";
import { startCase } from "../src/startCase";

describe("src/startCase", () => {
	it("converts strings to start case", () => {
		expect(startCase("foo_bar-baz")).toBe("Foo Bar Baz");
		expect(startCase("helloWorld")).toBe("Helloworld");
	});

	it("supports accented input", () => {
		expect(startCase("deja vu")).toBe("Deja Vu");
	});
});
