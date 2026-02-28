import { describe, expect, it } from "vitest";
import { uniqueId } from "../src/uniqueId";

describe("src/uniqueId", () => {
	it("generates incremental ids with prefix", () => {
		const a = uniqueId("x_");
		const b = uniqueId("x_");
		expect(a).toMatch(/^x_\d+$/);
		expect(b).toMatch(/^x_\d+$/);
		expect(a).not.toBe(b);
	});
});
