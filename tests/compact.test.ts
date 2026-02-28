import { describe, expect, it } from "vitest";
import { compact } from "../src/compact";

describe("src/compact", () => {
	it("removes falsey values", () => {
		expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([1, 2, 3]);
	});

	it("returns empty for non-array input", () => {
		expect(compact(null as never)).toEqual([]);
	});
});
