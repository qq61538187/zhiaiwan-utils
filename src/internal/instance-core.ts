const GLOBAL_KEY = "zhiaiwanUtils";
const WRAPPER_PROTO_KEY = Symbol.for("zhiaiwan-utils.wrapper-proto");

type WrapperState = {
	__wrapped__: unknown;
	__chain__: boolean;
	value: () => unknown;
	thru: (interceptor: (value: unknown) => unknown) => unknown;
	tap: (interceptor: (value: unknown) => unknown) => unknown;
	chain: () => WrapperState;
};

export type InstanceTarget =
	| Record<PropertyKey, unknown>
	| ((...args: readonly unknown[]) => unknown);

const isTarget = (value: unknown): value is InstanceTarget =>
	typeof value === "function" || (typeof value === "object" && value !== null);

const createWrapperState = (
	proto: Record<string, unknown>,
	value: unknown,
	chain = false,
): WrapperState => {
	const wrapped = Object.create(proto) as WrapperState;
	wrapped.__wrapped__ = value;
	wrapped.__chain__ = chain;
	return wrapped;
};

export const ensureWrapperSupport = (
	target: InstanceTarget,
): InstanceTarget => {
	const targetRecord = target as Record<PropertyKey, unknown>;
	if (targetRecord[WRAPPER_PROTO_KEY]) {
		return target;
	}

	const wrapperProto: Record<string, unknown> = {
		value(this: WrapperState) {
			return this.__wrapped__;
		},
		thru(this: WrapperState, interceptor: (value: unknown) => unknown) {
			const nextValue = interceptor(this.__wrapped__);
			if (this.__chain__) {
				this.__wrapped__ = nextValue;
				return this;
			}
			return nextValue;
		},
		tap(this: WrapperState, interceptor: (value: unknown) => unknown) {
			interceptor(this.__wrapped__);
			return this.__chain__ ? this : this.__wrapped__;
		},
		chain(this: WrapperState) {
			this.__chain__ = true;
			return this;
		},
	};

	targetRecord[WRAPPER_PROTO_KEY] = wrapperProto;
	targetRecord.chain = (value: unknown) =>
		createWrapperState(wrapperProto, value, true);
	if (typeof targetRecord.tap !== "function") {
		targetRecord.tap = (
			value: unknown,
			interceptor: (value: unknown) => unknown,
		) => {
			interceptor(value);
			return value;
		};
	}
	if (typeof targetRecord.thru !== "function") {
		targetRecord.thru = (
			value: unknown,
			interceptor: (value: unknown) => unknown,
		) => interceptor(value);
	}

	return target;
};

export const attachWrapperMethod = (
	target: InstanceTarget,
	name: string,
	fn: (...args: readonly unknown[]) => unknown,
	chain = true,
): void => {
	const targetRecord = target as Record<PropertyKey, unknown>;
	const wrapperProto = targetRecord[WRAPPER_PROTO_KEY] as
		| Record<string, unknown>
		| undefined;
	if (!wrapperProto) {
		return;
	}
	wrapperProto[name] = function (
		this: WrapperState,
		...args: readonly unknown[]
	): unknown {
		const result = fn.apply(target, [this.__wrapped__, ...args]);
		if (chain && this.__chain__) {
			this.__wrapped__ = result;
			return this;
		}
		return result;
	};
};

export const createUtilsInstance = (
	source: Record<PropertyKey, unknown> = {},
): Record<string, unknown> => {
	const instance = { ...source } as Record<string, unknown>;
	ensureWrapperSupport(instance);
	return instance;
};

export const getGlobalUtilsTarget = (
	context: Record<PropertyKey, unknown> = globalThis as Record<
		PropertyKey,
		unknown
	>,
): InstanceTarget | undefined => {
	const value = context[GLOBAL_KEY];
	return isTarget(value) ? value : undefined;
};

export const setGlobalUtilsTarget = (
	target: InstanceTarget,
	context: Record<PropertyKey, unknown> = globalThis as Record<
		PropertyKey,
		unknown
	>,
): void => {
	context[GLOBAL_KEY] = target;
};

export const utilsGlobalKey = GLOBAL_KEY;
