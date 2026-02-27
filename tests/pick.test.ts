import { describe, expect, it } from "vitest";
import { pick } from "../src/pick";

describe("pick", () => {
	it("returns selected fields only", () => {
		const source = { id: 1, name: "zhiaiwan", active: true };
		expect(pick(source, ["id", "name"])).toEqual({ id: 1, name: "zhiaiwan" });
	});

	it("ignores unknown keys", () => {
		const source = { id: 1, name: "zhiaiwan" };
		expect(pick(source, ["id"])).toEqual({ id: 1 });
	});

	it("returns empty object when keys are empty", () => {
		const source = { id: 1, name: "zhiaiwan" };
		expect(pick(source, [])).toEqual({});
	});

	it("keeps stable result with duplicated keys", () => {
		const source = { id: 1, name: "zhiaiwan" };
		expect(pick(source, ["id", "id", "name"])).toEqual({
			id: 1,
			name: "zhiaiwan",
		});
	});

	it("only picks own enumerable properties", () => {
		const proto = { id: 1 };
		const source = Object.create(proto) as Record<string, unknown>;
		source.name = "zhiaiwan";
		expect(pick(source, ["id", "name"] as const)).toEqual({ name: "zhiaiwan" });
	});

	it("does not mutate source object", () => {
		const source = { id: 1, name: "zhiaiwan" };
		const result = pick(source, ["id"] as const);
		expect(result).toEqual({ id: 1 });
		expect(source).toEqual({ id: 1, name: "zhiaiwan" });
	});
});
