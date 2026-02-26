declare module "node:fs" {
	export const existsSync: (...args: readonly unknown[]) => unknown;
	export const readFileSync: (...args: readonly unknown[]) => unknown;
}

declare module "node:module" {
	export const createRequire: (...args: readonly unknown[]) => unknown;
}

declare module "node:url" {
	export const fileURLToPath: (...args: readonly unknown[]) => unknown;
}

declare module "node:vm" {
	const vm: {
		runInNewContext: (...args: readonly unknown[]) => unknown;
	};
	export default vm;
}

declare module "../dist/es/zhiaiwanUtils.default.js" {
	const value: unknown;
	export default value;
}

declare module "../dist/es/array.js" {
	const value: unknown;
	export default value;
}

declare module "../dist/es/func.js" {
	const value: unknown;
	export default value;
}

declare module "../dist/es/object.js" {
	const value: unknown;
	export default value;
}

declare module "../dist/es/math.js" {
	const value: unknown;
	export default value;
}
