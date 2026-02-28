import { describe, expect, it } from "vitest";
import * as moduleRef from "../src/index";

describe("src/index", () => {
	it("exports grouped APIs", () => {
		expect(moduleRef).toBeDefined();
		expect(Object.keys(moduleRef.array).length).toBeGreaterThan(0);
		expect(Object.keys(moduleRef.object).length).toBeGreaterThan(0);
		expect(Object.keys(moduleRef.util).length).toBeGreaterThan(0);
		expect(Object.keys(moduleRef.collection).length).toBeGreaterThan(0);
		expect(Object.keys(moduleRef.lang).length).toBeGreaterThan(0);
		expect(Object.keys(moduleRef.string).length).toBeGreaterThan(0);
	});

	it("executes object group methods", () => {
		const proto = { inherited: 1, inheritedFn: () => 1 };
		const objectBase = Object.assign(Object.create(proto), {
			a: 1,
			b: 2,
			fn() {
				return 7;
			},
		});

		const objectCases: Record<string, () => unknown> = {
			assign: () => moduleRef.assign({ a: 1 }, { b: 2 }),
			assignIn: () => moduleRef.assignIn({ a: 1 }, objectBase),
			assignInWith: () =>
				moduleRef.assignInWith({ a: 1 }, objectBase, (left, right) =>
					left === undefined ? right : left,
				),
			assignWith: () =>
				moduleRef.assignWith({ a: 1 }, { a: 2, b: 3 }, (left, right) =>
					left === undefined ? right : left,
				),
			at: () => moduleRef.at({ a: [{ b: 2 }] }, ["a[0].b"]),
			create: () => moduleRef.create({ x: 1 }),
			defaults: () => moduleRef.defaults({ a: 1 }, { a: 2, b: 3 }),
			defaultsDeep: () => moduleRef.defaultsDeep({ a: { b: 1 } }, { a: { c: 2 } }),
			entries: () => moduleRef.entries({ a: 1 }),
			entriesIn: () => moduleRef.entriesIn(objectBase),
			extend: () => moduleRef.extend({ a: 1 }, objectBase),
			extendWith: () =>
				moduleRef.extendWith({ a: 1 }, { b: 2 }, (left, right) =>
					left === undefined ? right : left,
				),
			findKey: () => moduleRef.findKey({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1),
			findLastKey: () => moduleRef.findLastKey({ a: 1, b: 2 }, (v: unknown) => Number(v) > 0),
			forIn: () => moduleRef.forIn(objectBase, () => undefined),
			forInRight: () => moduleRef.forInRight(objectBase, () => undefined),
			forOwn: () => moduleRef.forOwn({ a: 1 }, () => undefined),
			forOwnRight: () => moduleRef.forOwnRight({ a: 1 }, () => undefined),
			functions: () => moduleRef.functions({ a: () => 1, b: 1 }),
			functionsIn: () => moduleRef.functionsIn(objectBase),
			get: () => moduleRef.get({ a: [{ b: 2 }] }, "a[0].b"),
			has: () => moduleRef.has({ a: [{ b: 2 }] }, "a[0].b"),
			hasIn: () => moduleRef.hasIn(objectBase, "inherited"),
			invert: () => moduleRef.invert({ a: "x", b: "y" }),
			invertBy: () => moduleRef.invertBy({ a: 1, b: 1, c: 2 }),
			invoke: () => moduleRef.invoke({ a: { f: (n: number) => n + 1 } }, "a.f", 1),
			keys: () => moduleRef.keys({ a: 1 }),
			keysIn: () => moduleRef.keysIn(objectBase),
			mapKeys: () => moduleRef.mapKeys({ a: 1 }, (_v, k) => `${k}!`),
			mapValues: () => moduleRef.mapValues({ a: 1 }, (v: unknown) => Number(v) + 1),
			merge: () => moduleRef.merge({ a: { b: 1 } }, { a: { c: 2 } }),
			mergeWith: () =>
				moduleRef.mergeWith({ a: [1] }, { a: [2] }, (left, right) =>
					Array.isArray(left) ? [...left, ...(right as number[])] : undefined,
				),
			omit: () => moduleRef.omit({ a: 1, b: 2 }, ["b"]),
			omitBy: () => moduleRef.omitBy({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1),
			pick: () => moduleRef.pick({ a: 1, b: 2 }, ["a"]),
			pickBy: () => moduleRef.pickBy({ a: 1, b: 2 }, (v: unknown) => Number(v) > 1),
			result: () => moduleRef.result({ a: { b: () => 3 } }, "a.b"),
			set: () => moduleRef.set({}, "a.b", 1),
			setWith: () => moduleRef.setWith({}, "a[0].b", 1, () => ({})),
			toPairs: () => moduleRef.toPairs({ a: 1 }),
			toPairsIn: () => moduleRef.toPairsIn(objectBase),
			transform: () =>
				moduleRef.transform(
					{ a: 1 },
					(output: Record<string, number>, value: unknown, key: string) => {
						output[key] = Number(value);
					},
					{},
				),
			unset: () => moduleRef.unset({ a: { b: 1 } }, "a.b"),
			update: () => moduleRef.update({ a: { b: 1 } }, "a.b", (v: unknown) => Number(v) + 1),
			updateWith: () =>
				moduleRef.updateWith(
					{},
					"a.b",
					(v: unknown) => (v == null ? 1 : Number(v) + 1),
					() => ({}),
				),
			values: () => moduleRef.values({ a: 1 }),
			valuesIn: () => moduleRef.valuesIn(objectBase),
			methods: () => moduleRef.methods({ a() {}, b: 1 }),
			methodsIn: () => moduleRef.methodsIn(objectBase),
		};

		for (const key of Object.keys(moduleRef.object)) {
			expect(objectCases[key]).toBeTypeOf("function");
			expect(objectCases[key]()).not.toBeUndefined();
		}
	});

	it("executes array group methods", () => {
		const arrayCases: Record<string, () => unknown> = {
			chunk: () => moduleRef.chunk([1, 2, 3], 2),
			compact: () => moduleRef.compact([0, 1, false, 2, ""]),
			concat: () => moduleRef.concat([1], [2], 3),
			difference: () => moduleRef.difference([1, 2, 3], [2]),
			differenceBy: () => moduleRef.differenceBy([{ x: 1 }], [{ x: 1 }], "x"),
			differenceWith: () =>
				moduleRef.differenceWith(
					[{ x: 1 }],
					[{ x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			drop: () => moduleRef.drop([1, 2, 3], 1),
			dropRight: () => moduleRef.dropRight([1, 2, 3], 1),
			dropRightWhile: () => moduleRef.dropRightWhile([1, 2, 0], (v: unknown) => Number(v) < 1),
			dropWhile: () => moduleRef.dropWhile([0, 1, 2], (v: unknown) => Number(v) < 1),
			fill: () => moduleRef.fill([1, 2, 3], 0, 1, 3),
			findIndex: () => moduleRef.findIndex([1, 2, 3], (v: unknown) => Number(v) > 1),
			findLastIndex: () => moduleRef.findLastIndex([1, 2, 3], (v: unknown) => Number(v) > 1),
			first: () => moduleRef.first([1, 2, 3]),
			flatten: () => moduleRef.flatten([1, [2, 3]]),
			flattenDeep: () => moduleRef.flattenDeep([1, [2, [3]]]),
			flattenDepth: () => moduleRef.flattenDepth([1, [2, [3]]], 2),
			fromPairs: () => moduleRef.fromPairs([["a", 1]]),
			head: () => moduleRef.head([1, 2, 3]),
			indexOf: () => moduleRef.indexOf([1, 2, 3], 2),
			initial: () => moduleRef.initial([1, 2, 3]),
			intersection: () => moduleRef.intersection([1, 2], [2, 3]),
			intersectionBy: () => moduleRef.intersectionBy([{ x: 1 }], [{ x: 1 }], "x"),
			intersectionWith: () =>
				moduleRef.intersectionWith(
					[{ x: 1 }],
					[{ x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			join: () => moduleRef.join([1, 2], "-"),
			last: () => moduleRef.last([1, 2, 3]),
			lastIndexOf: () => moduleRef.lastIndexOf([1, 2, 1], 1),
			nth: () => moduleRef.nth([1, 2, 3], -1),
			pull: () => moduleRef.pull([1, 2, 3], 2),
			pullAll: () => moduleRef.pullAll([1, 2, 3], [2]),
			pullAllBy: () => moduleRef.pullAllBy([{ x: 1 }], [{ x: 1 }], "x"),
			pullAllWith: () =>
				moduleRef.pullAllWith(
					[{ x: 1 }],
					[{ x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			pullAt: () => moduleRef.pullAt([1, 2, 3], [0, 2]),
			remove: () => moduleRef.remove([1, 2, 3], (v: unknown) => Number(v) > 1),
			reverse: () => moduleRef.reverse([1, 2, 3]),
			slice: () => moduleRef.slice([1, 2, 3], 1, 2),
			sortedIndex: () => moduleRef.sortedIndex([1, 3], 2),
			sortedIndexBy: () => moduleRef.sortedIndexBy([{ x: 1 }], { x: 2 }, "x"),
			sortedIndexOf: () => moduleRef.sortedIndexOf([1, 2, 2], 2),
			sortedLastIndex: () => moduleRef.sortedLastIndex([1, 2], 2),
			sortedLastIndexBy: () => moduleRef.sortedLastIndexBy([{ x: 1 }], { x: 2 }, "x"),
			sortedLastIndexOf: () => moduleRef.sortedLastIndexOf([1, 2, 2], 2),
			sortedUniq: () => moduleRef.sortedUniq([1, 1, 2]),
			sortedUniqBy: () => moduleRef.sortedUniqBy([{ x: 1 }, { x: 1 }], "x"),
			tail: () => moduleRef.tail([1, 2, 3]),
			take: () => moduleRef.take([1, 2, 3], 2),
			takeRight: () => moduleRef.takeRight([1, 2, 3], 2),
			takeRightWhile: () => moduleRef.takeRightWhile([1, 2, 0], (v: unknown) => Number(v) > 0),
			takeWhile: () => moduleRef.takeWhile([1, 2, 0], (v: unknown) => Number(v) > 0),
			union: () => moduleRef.union([1, 2], [2, 3]),
			unionBy: () => moduleRef.unionBy([{ x: 1 }], [{ x: 1 }, { x: 2 }], "x"),
			unionWith: () =>
				moduleRef.unionWith(
					[{ x: 1 }],
					[{ x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			unique: () => moduleRef.unique([1, 1, 2]),
			uniq: () => moduleRef.uniq([1, 1, 2]),
			uniqBy: () => moduleRef.uniqBy([{ x: 1 }, { x: 1 }], "x"),
			uniqWith: () =>
				moduleRef.uniqWith(
					[{ x: 1 }, { x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			unzip: () =>
				moduleRef.unzip([
					[1, "a"],
					[2, "b"],
				]),
			unzipWith: () =>
				moduleRef.unzipWith(
					[
						[1, 2],
						[3, 4],
					],
					(a: unknown, b: unknown) => Number(a) + Number(b),
				),
			without: () => moduleRef.without([1, 2, 3], 2),
			xor: () => moduleRef.xor([1, 2], [2, 3]),
			xorBy: () => moduleRef.xorBy([{ x: 1 }], [{ x: 2 }], "x"),
			xorWith: () =>
				moduleRef.xorWith(
					[{ x: 1 }],
					[{ x: 1 }],
					(a: unknown, b: unknown) => (a as { x: number }).x === (b as { x: number }).x,
				),
			zip: () => moduleRef.zip([1, 2], ["a", "b"]),
			zipObject: () => moduleRef.zipObject(["a"], [1]),
			zipObjectDeep: () => moduleRef.zipObjectDeep(["a.b"], [1]),
			zipWith: () =>
				moduleRef.zipWith([1, 2], [3, 4], (a: unknown, b: unknown) => Number(a) + Number(b)),
		};

		for (const key of Object.keys(moduleRef.array)) {
			expect(arrayCases[key]).toBeTypeOf("function");
			expect(arrayCases[key]()).not.toBeUndefined();
		}
	});

	it("executes function/util/collection groups", () => {
		const fnCases: Record<string, () => unknown> = {
			after: () => moduleRef.after(1, () => 1)(),
			ary: () => moduleRef.ary((a: number, b: number) => a + b, 1)(1, 2),
			before: () => moduleRef.before(2, () => 1)(),
			bind: () => moduleRef.bind((a: number, b: number) => a + b, null, 1)(2),
			bindKey: () => moduleRef.bindKey({ add: (a: number, b: number) => a + b }, "add", 1)(2),
			curry: () => moduleRef.curry((a: number, b: number) => a + b)(1)(2),
			curryRight: () =>
				(
					moduleRef.curryRight as (
						fn: (a: number, b: number) => number,
						arity: number,
					) => (a: number) => (b: number) => number
				)(
					(a: number, b: number) => a + b,
					2,
				)(2)(1),
			debounce: () => {
				const debounced = moduleRef.debounce((v: number) => v, 10);
				debounced(1);
				debounced.cancel();
				return debounced.flush();
			},
			defer: () => moduleRef.defer(() => undefined),
			delay: () => moduleRef.delay(() => undefined, 1),
			flip: () => moduleRef.flip((a: number, b: number) => a - b)(1, 2),
			memoize: () => moduleRef.memoize((v: number) => v + 1)(1),
			negate: () => moduleRef.negate((v: number) => v > 1)(1),
			once: () => moduleRef.once((v: number) => v + 1)(1),
			overArgs: () =>
				moduleRef.overArgs(
					(a: number, b: number) => a + b,
					[(v: unknown) => Number(v) + 1, (v: unknown) => Number(v) + 1],
				)(1, 2),
			partial: () => moduleRef.partial((a: number, b: number) => a + b, 1)(2),
			partialRight: () => moduleRef.partialRight((a: number, b: number) => a + b, 2)(1),
			rearg: () => moduleRef.rearg((a: number, b: number) => [a, b], [1, 0])(1, 2),
			rest: () => moduleRef.rest((values: number[]) => values.length)(1, 2),
			spread: () => moduleRef.spread((a: number, b: number) => a + b)([1, 2]),
			throttle: () => {
				const throttled = moduleRef.throttle((v: number) => v, 10);
				throttled(1);
				throttled.cancel();
				return throttled.flush();
			},
			unary: () => moduleRef.unary((a: number, b: number) => a + b)(1, 2),
			wrap: () => moduleRef.wrap(1, (v: number, ...args: unknown[]) => v + Number(args[0]))(2),
		};

		for (const key of Object.keys(moduleRef.func)) {
			expect(fnCases[key]).toBeTypeOf("function");
			fnCases[key]();
		}

		const utilCases: Record<string, () => unknown> = {
			attempt: () => moduleRef.attempt((v: number) => v + 1, 1),
			bindAll: () =>
				moduleRef.bindAll(
					{
						a() {
							return 1;
						},
					},
					["a"],
				),
			cond: () => moduleRef.cond([[(v: number) => v > 1, () => "ok"]])(2),
			conforms: () => moduleRef.conforms({ a: (v: unknown) => Number(v) > 1 })({ a: 2 }),
			constant: () => moduleRef.constant(1)(),
			defaultTo: () => moduleRef.defaultTo(undefined, 1),
			flow: () =>
				moduleRef.flow(
					(v: unknown) => Number(v) + 1,
					(v: unknown) => Number(v) + 1,
				)(1),
			flowRight: () =>
				moduleRef.flowRight(
					(v: unknown) => Number(v) + 1,
					(v: unknown) => Number(v) + 1,
				)(1),
			identity: () => moduleRef.identity(1),
			iteratee: () => moduleRef.iteratee("a")({ a: 1 }),
			matches: () => moduleRef.matches({ a: 1 })({ a: 1 }),
			matchesProperty: () => moduleRef.matchesProperty("a", 1)({ a: 1 }),
			method: () => moduleRef.method("a.b")({ a: { b: 1 } }),
			methodOf: () => moduleRef.methodOf({ a: { b: 1 } })("a.b"),
			mixin: () => moduleRef.mixin({}, { f: () => 1 }),
			noConflict: () => moduleRef.noConflict(),
			noop: () => moduleRef.noop(),
			nthArg: () => moduleRef.nthArg(1)(1, 2, 3),
			over: () => moduleRef.over([(v: unknown) => Number(v) + 1])(1),
			overEvery: () => moduleRef.overEvery([(v: unknown) => Number(v) > 0])(1),
			overSome: () => moduleRef.overSome([(v: unknown) => Number(v) > 0])(1),
			property: () => moduleRef.property("a")({ a: 1 }),
			propertyOf: () => moduleRef.propertyOf({ a: 1 })("a"),
			range: () => moduleRef.range(0, 3, 1),
			rangeRight: () => moduleRef.rangeRight(0, 3, 1),
			runInContext: () => moduleRef.runInContext({}),
			stubArray: () => moduleRef.stubArray(),
			stubFalse: () => moduleRef.stubFalse(),
			stubObject: () => moduleRef.stubObject(),
			stubString: () => moduleRef.stubString(),
			stubTrue: () => moduleRef.stubTrue(),
			times: () => moduleRef.times(2, (i) => i),
			toPath: () => moduleRef.toPath("a[0].b"),
			uniqueId: () => moduleRef.uniqueId("id_"),
			createUtilsInstance: () => moduleRef.createUtilsInstance(),
		};

		for (const key of Object.keys(moduleRef.util)) {
			expect(utilCases[key]).toBeTypeOf("function");
			utilCases[key]();
		}

		const collectionCases: Record<string, () => unknown> = {
			countBy: () => moduleRef.countBy([1, 2], String),
			every: () => moduleRef.every([1, 2], (v: unknown) => Number(v) > 0),
			filter: () => moduleRef.filter([1, 2], (v: unknown) => Number(v) > 1),
			find: () => moduleRef.find([1, 2], (v: unknown) => Number(v) > 1),
			findLast: () => moduleRef.findLast([1, 2], (v: unknown) => Number(v) > 0),
			flatMap: () => moduleRef.flatMap([1, 2], (v: unknown) => [v, v]),
			flatMapDeep: () => moduleRef.flatMapDeep([1], () => [[[1]]]),
			flatMapDepth: () => moduleRef.flatMapDepth([1], () => [[[1]]], 2),
			forEach: () => moduleRef.forEach([1], () => undefined),
			forEachRight: () => moduleRef.forEachRight([1], () => undefined),
			groupBy: () => moduleRef.groupBy([1, 2], String),
			includes: () => moduleRef.includes([1, 2], 2),
			invokeMap: () => moduleRef.invokeMap([[1], [2]], "join", "-"),
			keyBy: () => moduleRef.keyBy([{ a: 1 }], "a"),
			map: () => moduleRef.map([1, 2], (v: unknown) => Number(v) + 1),
			orderBy: () => moduleRef.orderBy([{ a: 2 }, { a: 1 }], ["a"], ["asc"]),
			partition: () => moduleRef.partition([1, 2], (v: unknown) => Number(v) > 1),
			reduce: () =>
				moduleRef.reduce([1, 2], (acc: unknown, v: unknown) => Number(acc) + Number(v), 0),
			reduceRight: () =>
				moduleRef.reduceRight([1, 2], (acc: unknown, v: unknown) => Number(acc) + Number(v), 0),
			reject: () => moduleRef.reject([1, 2], (v: unknown) => Number(v) > 1),
			sample: () => moduleRef.sample([1, 2]),
			sampleSize: () => moduleRef.sampleSize([1, 2, 3], 2),
			shuffle: () => moduleRef.shuffle([1, 2, 3]),
			size: () => moduleRef.size([1, 2]),
			some: () => moduleRef.some([1, 2], (v: unknown) => Number(v) > 1),
			sortBy: () => moduleRef.sortBy([{ a: 2 }, { a: 1 }], ["a"]),
			each: () => moduleRef.each([1], () => undefined),
			eachRight: () => moduleRef.eachRight([1], () => undefined),
		};

		for (const key of Object.keys(moduleRef.collection)) {
			expect(collectionCases[key]).toBeTypeOf("function");
			collectionCases[key]();
		}
	});

	it("executes string/lang/math/number/date/seq groups", () => {
		const stringCases: Record<string, () => unknown> = {
			camelCase: () => moduleRef.camelCase("foo bar"),
			capitalize: () => moduleRef.capitalize("foo"),
			deburr: () => moduleRef.deburr("déjà"),
			endsWith: () => moduleRef.endsWith("abc", "c"),
			escape: () => moduleRef.escape("<a>"),
			escapeRegExp: () => moduleRef.escapeRegExp("a+b"),
			kebabCase: () => moduleRef.kebabCase("Foo Bar"),
			lowerCase: () => moduleRef.lowerCase("Foo Bar"),
			lowerFirst: () => moduleRef.lowerFirst("Foo"),
			pad: () => moduleRef.pad("a", 3),
			padEnd: () => moduleRef.padEnd("a", 3),
			padStart: () => moduleRef.padStart("a", 3),
			parseInt: () => moduleRef.parseInt("10", 10),
			repeat: () => moduleRef.repeat("a", 2),
			replace: () => moduleRef.replace("abc", "b", "x"),
			snakeCase: () => moduleRef.snakeCase("Foo Bar"),
			split: () => moduleRef.split("a-b", "-"),
			startCase: () => moduleRef.startCase("fooBar"),
			startsWith: () => moduleRef.startsWith("abc", "a"),
			template: () => moduleRef.template("hello <%= user %>")({ user: "lxf" }),
			toLower: () => moduleRef.toLower("ABC"),
			toUpper: () => moduleRef.toUpper("abc"),
			trim: () => moduleRef.trim(" a "),
			trimEnd: () => moduleRef.trimEnd(" a "),
			trimStart: () => moduleRef.trimStart(" a "),
			truncate: () => moduleRef.truncate("abcdef", { length: 4 }),
			unescape: () => moduleRef.unescape("&lt;a&gt;"),
			upperCase: () => moduleRef.upperCase("fooBar"),
			upperFirst: () => moduleRef.upperFirst("foo"),
			words: () => moduleRef.words("foo bar"),
		};

		for (const key of Object.keys(moduleRef.string)) {
			expect(stringCases[key]).toBeTypeOf("function");
			stringCases[key]();
		}

		const langCases: Record<string, () => unknown> = {
			castArray: () => moduleRef.castArray(1),
			clone: () => moduleRef.clone({ a: 1 }),
			cloneDeep: () => moduleRef.cloneDeep({ a: { b: 1 } }),
			cloneDeepWith: () => moduleRef.cloneDeepWith({ a: 1 }, (v: unknown) => v),
			cloneWith: () => moduleRef.cloneWith({ a: 1 }, (v: unknown) => v),
			conformsTo: () => moduleRef.conformsTo({ a: 1 }, { a: (v: unknown) => Number(v) > 0 }),
			eq: () => moduleRef.eq(1, 1),
			gt: () => moduleRef.gt(2, 1),
			gte: () => moduleRef.gte(2, 2),
			isArguments: () => moduleRef.isArguments({ [Symbol.toStringTag]: "Arguments" }),
			isArray: () => moduleRef.isArray([]),
			isArrayBuffer: () => moduleRef.isArrayBuffer(new ArrayBuffer(1)),
			isArrayLike: () => moduleRef.isArrayLike("ab"),
			isArrayLikeObject: () => moduleRef.isArrayLikeObject([]),
			isBoolean: () => moduleRef.isBoolean(false),
			isBuffer: () => moduleRef.isBuffer(Uint8Array.from([1])),
			isDate: () => moduleRef.isDate(new Date()),
			isElement: () => moduleRef.isElement({ nodeType: 1 }),
			isEmpty: () => moduleRef.isEmpty([]),
			isEqual: () => moduleRef.isEqual({ a: 1 }, { a: 1 }),
			isEqualWith: () => moduleRef.isEqualWith(1, 1, () => undefined),
			isError: () => moduleRef.isError(new Error("e")),
			isFinite: () => moduleRef.isFinite(1),
			isFunction: () => moduleRef.isFunction(() => undefined),
			isInteger: () => moduleRef.isInteger(1),
			isLength: () => moduleRef.isLength(1),
			isMap: () => moduleRef.isMap(new Map()),
			isMatch: () => moduleRef.isMatch({ a: 1 }, { a: 1 }),
			isMatchWith: () => moduleRef.isMatchWith({ a: 1 }, { a: 1 }, () => undefined),
			isNaN: () => moduleRef.isNaN(Number.NaN),
			isNative: () => moduleRef.isNative(Array.prototype.push),
			isNil: () => moduleRef.isNil(null),
			isNull: () => moduleRef.isNull(null),
			isNumber: () => moduleRef.isNumber(1),
			isObject: () => moduleRef.isObject({}),
			isObjectLike: () => moduleRef.isObjectLike({}),
			isPlainObject: () => moduleRef.isPlainObject({}),
			isRegExp: () => moduleRef.isRegExp(/a/),
			isSafeInteger: () => moduleRef.isSafeInteger(1),
			isSet: () => moduleRef.isSet(new Set()),
			isString: () => moduleRef.isString("a"),
			isSymbol: () => moduleRef.isSymbol(Symbol("x")),
			isTypedArray: () => moduleRef.isTypedArray(Uint8Array.from([1])),
			isUndefined: () => moduleRef.isUndefined(undefined),
			isWeakMap: () => moduleRef.isWeakMap(new WeakMap()),
			isWeakSet: () => moduleRef.isWeakSet(new WeakSet()),
			lt: () => moduleRef.lt(1, 2),
			lte: () => moduleRef.lte(1, 1),
			toArray: () => moduleRef.toArray("ab"),
			toFinite: () => moduleRef.toFinite("1"),
			toInteger: () => moduleRef.toInteger("1.9"),
			toLength: () => moduleRef.toLength("10"),
			toNumber: () => moduleRef.toNumber("1.2"),
			toPlainObject: () => moduleRef.toPlainObject(Object.create({ a: 1 })),
			toSafeInteger: () => moduleRef.toSafeInteger("1"),
			toString: () => moduleRef.toString(1),
		};

		for (const key of Object.keys(moduleRef.lang)) {
			expect(langCases[key]).toBeTypeOf("function");
			langCases[key]();
		}

		expect(moduleRef.add(1, 2)).toBe(3);
		expect(moduleRef.ceil(1.1)).toBe(2);
		expect(moduleRef.divide(4, 2)).toBe(2);
		expect(moduleRef.floor(1.9)).toBe(1);
		expect(moduleRef.max([1, 2])).toBe(2);
		expect(moduleRef.maxBy([{ a: 1 }, { a: 2 }], "a")).toEqual({ a: 2 });
		expect(moduleRef.mean([1, 2])).toBe(1.5);
		expect(moduleRef.meanBy([{ a: 1 }, { a: 2 }], "a")).toBe(1.5);
		expect(moduleRef.min([1, 2])).toBe(1);
		expect(moduleRef.minBy([{ a: 1 }, { a: 2 }], "a")).toEqual({ a: 1 });
		expect(moduleRef.multiply(2, 3)).toBe(6);
		expect(moduleRef.round(1.6)).toBe(2);
		expect(moduleRef.subtract(4, 1)).toBe(3);
		expect(moduleRef.sum([1, 2])).toBe(3);
		expect(moduleRef.sumBy([{ a: 1 }, { a: 2 }], "a")).toBe(3);
		expect(moduleRef.clamp(3, 0, 2)).toBe(2);
		expect(moduleRef.inRange(1, 0, 2)).toBe(true);
		expect(typeof moduleRef.random(0, 1)).toBe("number");
		expect(typeof moduleRef.now()).toBe("number");
		expect(
			moduleRef
				.chain([1])
				.tap(() => undefined)
				.thru((v: unknown) => (v as number[]).concat(2))
				.value(),
		).toEqual([1, 2]);
		expect(moduleRef.tap(1, (v: unknown) => v)).toBe(1);
		expect(moduleRef.thru(1, (v: unknown) => Number(v) + 1)).toBe(2);
	});

	it("covers additional fallback branches", () => {
		expect(moduleRef.after(0, () => "x")()).toBe("x");
		expect(moduleRef.after(2, () => "x")()).toBeUndefined();
		expect(moduleRef.assign({ a: 1 }, null, undefined)).toEqual({ a: 1 });
		expect(
			moduleRef.attempt(() => {
				throw new Error("x");
			}),
		).toBeInstanceOf(Error);
		expect(moduleRef.before(1, () => 1)()).toBe(1);
		expect(moduleRef.bindAll({ a: 1 } as never, ["a"])).toEqual({ a: 1 });
		expect(() => moduleRef.bindKey({} as never, "missing")()).toThrow(
			"bindKey target is not a function",
		);
		expect(moduleRef.chunk([1, 2], 0)).toEqual([]);
		expect(moduleRef.defaultTo(null, 1)).toBe(1);
		expect(moduleRef.endsWith("abc", "a", -1)).toBe(false);
		expect(moduleRef.fill([1, 2], 0, -1, 10)).toEqual([1, 0]);
		expect(moduleRef.pad("abc", 2)).toBe("abc");
		expect(moduleRef.parseInt("11", 2)).toBe(3);
		expect(moduleRef.split("a-b", "-", -1)).toEqual([]);
		expect(moduleRef.startsWith("abc", "a", 100)).toBe(false);
		expect(moduleRef.truncate("abc", { length: 2, omission: "..." })).toBe("...");
	});
});
