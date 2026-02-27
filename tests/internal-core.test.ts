import { describe, expect, it } from "vitest";
import { toCollectionEntries } from "../src/internal/collection-core";
import { isEqualCore } from "../src/internal/equal-core";
import { toIterateeCore } from "../src/internal/iteratee-core";
import {
	getAtPath,
	hasAtPath,
	invokeAtPath,
	setAtPath,
	toPathCore,
	unsetAtPath,
} from "../src/internal/path-core";

describe("internal core modules", () => {
	it("handles path core operations", () => {
		expect(toPathCore("a[0].b")).toEqual(["a", 0, "b"]);
		expect(getAtPath({ a: [{ b: 2 }] }, "a[0].b")).toBe(2);
		expect(hasAtPath({ a: { b: 1 } }, "a.b")).toBe(true);

		const target: Record<PropertyKey, unknown> = {};
		setAtPath(target, "x[0].y", 9);
		expect(target).toEqual({ x: [{ y: 9 }] });

		unsetAtPath(target, "x[0].y");
		expect(target).toEqual({ x: [{}] });

		expect(invokeAtPath([1, 2, 3], "slice", [1])).toEqual([2, 3]);
	});

	it("handles collection core entries", () => {
		expect(toCollectionEntries([10, 20])).toEqual([
			[0, 10],
			[1, 20],
		]);
		expect(toCollectionEntries({ a: 1, b: 2 })).toEqual([
			["a", 1],
			["b", 2],
		]);
	});

	it("handles equal core and iteratee core", () => {
		expect(isEqualCore({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true);
		expect(isEqualCore({ a: 1 }, { a: 2 })).toBe(false);

		const propIter = toIterateeCore<{ a: { b: number } }, number>("a.b");
		expect(propIter({ a: { b: 3 } }, 0, [{ a: { b: 3 } }])).toBe(3);

		const pairIter = toIterateeCore(["role", "admin"] as const);
		expect(pairIter({ role: "admin" }, 0, [{ role: "admin" }])).toBe(true);

		const objectIter = toIterateeCore({ role: "admin" });
		expect(
			objectIter({ role: "admin", active: true }, 0, [{ role: "admin" }]),
		).toBe(true);
	});
});
