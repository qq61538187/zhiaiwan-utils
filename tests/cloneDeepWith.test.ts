import { describe, expect, it } from "vitest";
import { cloneDeepWith } from "../src/cloneDeepWith";

describe("src/cloneDeepWith", () => {
	it("applies customizer during deep clone", () => {
		const source = { a: [1, 2] };
		const cloned = cloneDeepWith(source, (value) => (Array.isArray(value) ? ["x"] : undefined)) as {
			a: string[];
		};
		expect(cloned).toEqual({ a: ["x"] });
	});
});
