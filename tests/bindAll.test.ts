import { describe, expect, it } from "vitest";
import { bindAll } from "../src/bindAll";

describe("src/bindAll", () => {
	it("binds methods to object", () => {
		const view = {
			label: "docs",
			click() {
				return this.label;
			},
		};
		const click = bindAll(view, ["click"]).click;
		expect(click()).toBe("docs");
	});
});
