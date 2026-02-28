import { describe, expect, it } from "vitest";
import { flatMapDeep } from "../src/flatMapDeep";

describe("src/flatMapDeep", () => {
	it("maps and flattens deeply", () => {
		expect(flatMapDeep([1], () => [[[1]]])).toEqual([1]);
	});

	it("returns empty for nullish collection", () => {
		expect(flatMapDeep(null, () => [1])).toEqual([]);
	});
});
