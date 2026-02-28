import { describe, expect, it } from "vitest";
import { toPath } from "../src/toPath";

describe("src/toPath", () => {
	it("parses string paths into segments", () => {
		expect(toPath("a[0].b.c")).toEqual(["a", 0, "b", "c"]);
		expect(toPath("a['b'].c")).toEqual(["a", "b", "c"]);
	});

	it("supports array path input", () => {
		expect(toPath(["a", 0, "b"])).toEqual(["a", 0, "b"]);
	});
});
