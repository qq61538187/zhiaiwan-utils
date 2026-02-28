/**
 * Purpose：Centralize unsafe key detection for object/path writes.
 * Used in：`path-core` and object merge/assign internals.
 * Why：Consistent prototype pollution guard across write-capable APIs.
 */
const UNSAFE_KEYS = new Set(["__proto__", "constructor", "prototype"]);

export const isUnsafePropertyKey = (key: PropertyKey): boolean =>
	typeof key === "string" && UNSAFE_KEYS.has(key);
