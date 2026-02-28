import { describe, expect, it } from "vitest";
import { keyBy } from "../src/keyBy";

describe("src/keyBy", () => {
	it("indexes collection by iteratee key", () => {
		expect(keyBy([{ dir: "left" }, { dir: "right" }], "dir")).toEqual({
			left: { dir: "left" },
			right: { dir: "right" },
		});
	});

	it("returns empty object for nullish collection", () => {
		expect(keyBy(null, "a")).toEqual({});
	});
});
