import { describe, expect, it } from "vitest";
import {
	attempt,
	bindAll,
	cond,
	conforms,
	constant,
	createUtilsInstance,
	defaultTo,
	flow,
	flowRight,
	identity,
	iteratee,
	matches,
	matchesProperty,
	method,
	methodOf,
	mixin,
	noConflict,
	noop,
	nthArg,
	over,
	overEvery,
	overSome,
	property,
	propertyOf,
	range,
	rangeRight,
	runInContext,
	stubArray,
	stubFalse,
	stubObject,
	stubString,
	stubTrue,
	times,
	toPath,
	uniqueId,
} from "../src/index";

describe("util methods", () => {
	it("supports identity/constant/noop/defaultTo", () => {
		expect(identity(1)).toBe(1);
		expect(constant("ok")()).toBe("ok");
		expect(noop()).toBeUndefined();
		expect(defaultTo(undefined, 10)).toBe(10);
		expect(defaultTo(NaN, 10)).toBe(10);
		expect(defaultTo(1, 10)).toBe(1);
	});

	it("supports attempt", () => {
		expect(attempt((value: number) => value + 1, 1)).toBe(2);
		const error = attempt(() => JSON.parse("{"));
		expect(error).toBeInstanceOf(Error);
	});

	it("supports times/range/rangeRight/nthArg/stub*/uniqueId/toPath", () => {
		expect(times(3, String)).toEqual(["0", "1", "2"]);
		expect(range(1, 5)).toEqual([1, 2, 3, 4]);
		expect(rangeRight(1, 5)).toEqual([4, 3, 2, 1]);
		expect(nthArg(1)("a", "b", "c")).toBe("b");
		expect(stubArray()).toEqual([]);
		expect(stubFalse()).toBe(false);
		expect(stubObject()).toEqual({});
		expect(stubString()).toBe("");
		expect(stubTrue()).toBe(true);
		expect(uniqueId("id_")).toMatch(/^id_\d+$/);
		expect(toPath("a[0].b.c")).toEqual(["a", 0, "b", "c"]);
	});

	it("supports over/overEvery/overSome/cond/conforms", () => {
		expect(
			over([(value: number) => value + 1, (value: number) => value * 2])(2),
		).toEqual([3, 4]);
		expect(
			overEvery([(value: number) => value > 0, (value: number) => value < 10])(
				3,
			),
		).toBe(true);
		expect(
			overSome([(value: number) => value > 0, (value: number) => value < 0])(3),
		).toBe(true);
		const classify = cond<number[], string>([
			[(value) => value > 0, () => "positive"],
			[() => true, () => "other"],
		]);
		expect(classify(1)).toBe("positive");
		expect(conforms({ age: (value) => Number(value) >= 18 })({ age: 20 })).toBe(
			true,
		);
	});

	it("supports property helpers and iteratee", () => {
		const getName = property("user.name");
		expect(getName({ user: { name: "zw" } })).toBe("zw");
		const fromUser = propertyOf({ user: { id: 1 } });
		expect(fromUser("user.id")).toBe(1);
		expect(matches({ role: "admin" })({ role: "admin", active: true })).toBe(
			true,
		);
		expect(matchesProperty("role", "admin")({ role: "admin" })).toBe(true);
		expect(iteratee("name")({ name: "zw" })).toBe("zw");
		expect(iteratee(["role", "admin"])({ role: "admin" })).toBe(true);
	});

	it("supports method and methodOf", () => {
		const invokeSlice = method("slice", 1);
		expect(invokeSlice([1, 2, 3])).toEqual([2, 3]);

		const invokeFromMath = methodOf(Math, 1, 3);
		expect(invokeFromMath("max")).toBe(3);
	});

	it("supports bindAll", () => {
		const view = {
			label: "docs",
			click() {
				return this.label;
			},
		};
		bindAll(view, ["click"]);
		expect(view.click()).toBe("docs");
	});

	it("supports mixin/runInContext/noConflict in global-like scenarios", () => {
		const target: Record<string, unknown> = {};
		mixin(target, {
			square(value: number) {
				return value * value;
			},
		});
		expect((target.square as (value: number) => number)(3)).toBe(9);

		const globalRecord = globalThis as Record<PropertyKey, unknown>;
		const previous = globalRecord.zhiaiwanUtils;
		globalRecord.zhiaiwanUtils = { hello: "world" };

		mixin({
			cube(value: number) {
				return value * value * value;
			},
		});
		expect(
			typeof (globalRecord.zhiaiwanUtils as Record<string, unknown>).cube,
		).toBe("function");

		const isolated = runInContext();
		expect(isolated).toMatchObject({ hello: "world" });
		expect(isolated).not.toBe(globalRecord.zhiaiwanUtils);
		const instance = { marker: 1, runInContext };
		expect(instance.runInContext()).toMatchObject({ marker: 1 });

		const current = { marker: true };
		globalRecord.zhiaiwanUtils = current;
		expect(noConflict()).toBe(current);
		expect(globalRecord.zhiaiwanUtils).not.toBe(current);

		const localTarget = {
			sum(a: number, b: number) {
				return a + b;
			},
		};
		const localMixinHost = { mixin };
		localMixinHost.mixin({
			twice(n: number) {
				return n * 2;
			},
		});
		expect(typeof (localMixinHost as Record<string, unknown>).twice).toBe(
			"function",
		);
		expect(localTarget.sum(1, 2)).toBe(3);

		const chainHost: Record<string, unknown> = {};
		mixin(chainHost, {
			inc(value: number, step = 1) {
				return value + step;
			},
		});
		const chainResult = (
			chainHost.chain as (value: unknown) => {
				inc: (step?: number) => { value: () => unknown };
			}
		)(1)
			.inc(2)
			.value();
		expect(chainResult).toBe(3);

		const isolatedInstance = createUtilsInstance({ mark: "ok" });
		expect(isolatedInstance).toMatchObject({ mark: "ok" });
		expect(typeof isolatedInstance.chain).toBe("function");

		globalRecord.zhiaiwanUtils = previous;
	});

	it("keeps flow and flowRight behavior", () => {
		expect(
			flow(
				(n: number) => n + 1,
				(n: number) => n * 2,
			)(1),
		).toBe(4);
		expect(
			flowRight(
				(n: number) => n * 2,
				(n: number) => n + 1,
			)(1),
		).toBe(4);
	});
});
