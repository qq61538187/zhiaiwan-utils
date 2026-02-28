import { describe, expect, it } from "vitest";
import { truncate } from "../src/truncate";

describe("src/truncate", () => {
	it("truncates by length with default omission", () => {
		expect(truncate("abcdef", { length: 4 })).toBe("a...");
		expect(truncate("abc", { length: 5 })).toBe("abc");
	});

	it("supports custom omission and separator", () => {
		expect(truncate("hello world test", { length: 11, separator: " " })).toBe("hello...");
		expect(truncate("hello world test", { length: 12, omission: ".." })).toBe("hello worl..");
	});
});
