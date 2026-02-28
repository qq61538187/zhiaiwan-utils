import { describe, expect, it } from "vitest";
import { createUtilsInstance } from "../src/createUtilsInstance";

describe("src/createUtilsInstance", () => {
	it("creates instance with wrapper helpers", () => {
		const instance = createUtilsInstance({ version: "1.0.0" });
		expect(instance.version).toBe("1.0.0");
		expect(typeof instance.chain).toBe("function");
		expect(typeof instance.tap).toBe("function");
		expect(typeof instance.thru).toBe("function");
	});
});
