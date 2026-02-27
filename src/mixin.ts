import {
	attachWrapperMethod,
	ensureWrapperSupport,
	getGlobalUtilsTarget,
	type InstanceTarget,
	setGlobalUtilsTarget,
} from "./internal/instance-core.js";

interface MixinOptions {
	chain?: boolean;
}

type MixinTarget = InstanceTarget;

const mixinGetFunctionEntries = (source: Record<PropertyKey, unknown>) =>
	Object.entries(source).filter(
		([, value]) => typeof value === "function",
	) as Array<[string, (...args: readonly unknown[]) => unknown]>;

/**
 * Adds function properties of `source` to `object`.
 *
 * If `object` is a function, methods are also added to its prototype.
 *
 * @since +0.1.0
 * @category Util
 * @param {MixinTarget | Record<PropertyKey, unknown>} object The destination object.
 * @param {Record<PropertyKey, unknown>} source The object of functions to add.
 * @param {MixinOptions} [options] The options object.
 * @returns {MixinTarget} Returns `object`.
 * @example
 *
 * const target = {}
 * mixin(target, { square: (n: number) => n * n })
 * // => target.square is available
 */
export function mixin(
	this: unknown,
	object: MixinTarget | Record<PropertyKey, unknown>,
	source?: Record<PropertyKey, unknown>,
	options: MixinOptions = {},
): MixinTarget {
	let target: MixinTarget;
	let sourceObject: Record<PropertyKey, unknown>;

	if (source == null) {
		target =
			(typeof this === "function" || (typeof this === "object" && this !== null)
				? (this as MixinTarget)
				: getGlobalUtilsTarget()) ?? {};
		ensureWrapperSupport(target);
		if (getGlobalUtilsTarget() == null) {
			setGlobalUtilsTarget(target);
		}
		sourceObject = object as Record<PropertyKey, unknown>;
	} else {
		target = object as MixinTarget;
		ensureWrapperSupport(target);
		sourceObject = source;
	}

	const entries = mixinGetFunctionEntries(sourceObject);
	const shouldChain = options.chain !== false;
	for (const [name, fn] of entries) {
		(target as Record<string, unknown>)[name] = fn;
		attachWrapperMethod(target, name, fn, shouldChain);

		if (typeof target === "function") {
			if (shouldChain) {
				(target as { prototype: Record<string, unknown> }).prototype[name] =
					function (
						this: {
							value: () => unknown;
							thru?: (interceptor: (value: unknown) => unknown) => unknown;
						},
						...args: readonly unknown[]
					) {
						const currentValue =
							typeof this.value === "function" ? this.value() : this;
						const result = fn.apply(target, [currentValue, ...args]);
						if (typeof this.thru === "function") {
							return this.thru(() => result);
						}
						return result;
					};
			} else {
				(target as { prototype: Record<string, unknown> }).prototype[name] =
					function (this: unknown, ...args: readonly unknown[]) {
						return fn.apply(this, [...args]);
					};
			}
		}
	}

	return target;
}

export default mixin;
