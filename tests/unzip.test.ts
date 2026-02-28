import { describe, expect, it } from "vitest";
import { unzip } from "../src/unzip";

describe("src/unzip", () => {
	it("unzips grouped arrays", () => {
		expect(
			unzip([
				["a", 1],
				["b", 2],
			]),
		).toEqual([
			["a", "b"],
			[1, 2],
		]);
	});
});
