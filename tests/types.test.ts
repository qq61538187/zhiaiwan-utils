import { describe, expect, it } from "vitest";
import * as moduleRef from "../src/types";

describe("src/types", () => {
	it("has no runtime exports (type-only module)", () => {
		expect(Object.keys(moduleRef)).toEqual([]);
	});
});
