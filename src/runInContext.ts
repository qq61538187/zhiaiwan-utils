import {
	createUtilsInstance,
	getGlobalUtilsTarget,
	type InstanceTarget,
} from "./internal/instance-core.js";

const runInContextIsInstanceLike = (value: unknown): value is InstanceTarget =>
	typeof value === "function" || (typeof value === "object" && value !== null);

/**
 * Creates a new isolated utility object using `context`.
 *
 * In runtime globals, this helps avoid mutating the primary shared instance.
 *
 * @since +0.1.0
 * @category Util
 * @param {Record<PropertyKey, unknown>} [context=globalThis] The context object.
 * @returns {Record<string, unknown>} Returns a new utility object.
 * @example
 *
 * typeof runInContext().add
 * // => 'function'
 */
export function runInContext(
	this: unknown,
	context: Record<PropertyKey, unknown> = globalThis as Record<
		PropertyKey,
		unknown
	>,
): Record<string, unknown> {
	if (runInContextIsInstanceLike(this)) {
		return createUtilsInstance(this as Record<PropertyKey, unknown>);
	}

	const scoped = getGlobalUtilsTarget(context);
	if (scoped && typeof scoped === "object") {
		return createUtilsInstance(scoped as Record<PropertyKey, unknown>);
	}

	const globalScoped = getGlobalUtilsTarget();
	if (globalScoped && typeof globalScoped === "object") {
		return createUtilsInstance(globalScoped as Record<PropertyKey, unknown>);
	}

	return createUtilsInstance({ runInContext });
}

export default runInContext;
