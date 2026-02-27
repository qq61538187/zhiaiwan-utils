const reWords = /[A-Za-z0-9]+/g;
const htmlEscapes: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};
const htmlUnescapes: Record<string, string> = Object.fromEntries(
	Object.entries(htmlEscapes).map(([k, v]) => [v, k]),
);

const splitWords = (value: string): string[] =>
	(value.match(reWords) ?? []).map((word) => word);

const capitalizeWord = (value: string): string =>
	value.length === 0
		? ""
		: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export const deburr = (value = ""): string =>
	value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const endsWith = (
	value = "",
	target = "",
	position = value.length,
): boolean => {
	const end = Math.min(Math.max(0, Math.trunc(position)), value.length);
	return value.slice(0, end).endsWith(target);
};

const escapeFn = (value = ""): string =>
	value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);

export const escapeRegExp = (value = ""): string =>
	value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");

export const lowerCase = (value = ""): string =>
	splitWords(deburr(value))
		.map((word) => word.toLowerCase())
		.join(" ");

export const lowerFirst = (value = ""): string =>
	value.length === 0 ? "" : value.charAt(0).toLowerCase() + value.slice(1);

const createPadding = (length: number, chars = " "): string => {
	if (length <= 0) {
		return "";
	}
	if (chars.length === 0) {
		return " ".repeat(length);
	}
	return chars.repeat(Math.ceil(length / chars.length)).slice(0, length);
};

export const pad = (value = "", length = 0, chars = " "): string => {
	const targetLength = Math.trunc(length);
	if (value.length >= targetLength) {
		return value;
	}
	const total = targetLength - value.length;
	const left = Math.floor(total / 2);
	const right = total - left;
	return `${createPadding(left, chars)}${value}${createPadding(right, chars)}`;
};

export const padEnd = (value = "", length = 0, chars = " "): string => {
	const targetLength = Math.trunc(length);
	if (value.length >= targetLength) {
		return value;
	}
	return `${value}${createPadding(targetLength - value.length, chars)}`;
};

export const padStart = (value = "", length = 0, chars = " "): string => {
	const targetLength = Math.trunc(length);
	if (value.length >= targetLength) {
		return value;
	}
	return `${createPadding(targetLength - value.length, chars)}${value}`;
};

const parseIntFn = (value = "", radix?: number): number => {
	const input = String(value).trim();
	const normalizedRadix =
		radix == null || Number.isNaN(radix)
			? /^[-+]?0x/i.test(input)
				? 16
				: 10
			: Math.trunc(radix);
	return Number.parseInt(input, normalizedRadix);
};

export const repeat = (value = "", n = 1): string =>
	value.repeat(Math.max(0, Math.trunc(n)));

export const replace = (
	value = "",
	pattern: string | RegExp,
	replacement: string,
): string => value.replace(pattern, replacement);

export const split = (
	value = "",
	separator?: string | RegExp,
	limit?: number,
): string[] => {
	if (separator === undefined) {
		return [value];
	}
	if (limit === undefined) {
		return value.split(separator);
	}
	return value.split(separator, Math.max(0, Math.trunc(limit)));
};

export const startCase = (value = ""): string =>
	splitWords(deburr(value))
		.map((word) => capitalizeWord(word))
		.join(" ");

export const startsWith = (value = "", target = "", position = 0): boolean => {
	const start = Math.min(
		Math.max(0, Math.trunc(position)),
		Math.max(0, value.length),
	);
	return value.slice(start).startsWith(target);
};

export const template = (
	source = "",
): ((data?: Record<string, unknown>) => string) => {
	const compiled = String(source);
	return (data: Record<string, unknown> = {}) =>
		compiled.replace(/<%=\s*([\w$.]+)\s*%>/g, (_match, key) => {
			const parts = String(key).split(".");
			let current: unknown = data;
			for (const part of parts) {
				if (current == null || typeof current !== "object") {
					return "";
				}
				current = (current as Record<string, unknown>)[part];
			}
			return current == null ? "" : String(current);
		});
};

export const toLower = (value = ""): string => value.toLowerCase();
export const toUpper = (value = ""): string => value.toUpperCase();
export const trimEnd = (value = "", chars?: string): string =>
	chars === undefined
		? value.trimEnd()
		: value.replace(new RegExp(`[${escapeRegExp(chars)}]+$`), "");
export const trimStart = (value = "", chars?: string): string =>
	chars === undefined
		? value.trimStart()
		: value.replace(new RegExp(`^[${escapeRegExp(chars)}]+`), "");

export const truncate = (
	value = "",
	options?: { length?: number; omission?: string; separator?: RegExp | string },
): string => {
	const length = options?.length ?? 30;
	const omission = options?.omission ?? "...";
	if (value.length <= length) {
		return value;
	}
	const end = Math.max(0, length - omission.length);
	let result = value.slice(0, end);
	const separator = options?.separator;
	if (separator) {
		if (typeof separator === "string") {
			const index = result.lastIndexOf(separator);
			if (index >= 0) {
				result = result.slice(0, index);
			}
		} else {
			const matches = result.match(separator);
			if (matches && matches.index !== undefined) {
				result = result.slice(0, matches.index);
			}
		}
	}
	return `${result}${omission}`;
};

const unescapeFn = (value = ""): string =>
	value.replace(/&(amp|lt|gt|quot|#39);/g, (entity) => htmlUnescapes[entity]);

export const upperCase = (value = ""): string =>
	splitWords(deburr(value))
		.map((word) => word.toUpperCase())
		.join(" ");

export const upperFirst = (value = ""): string =>
	value.length === 0 ? "" : value.charAt(0).toUpperCase() + value.slice(1);

export const words = (value = "", pattern?: RegExp | string): string[] => {
	if (pattern instanceof RegExp) {
		return value.match(pattern) ?? [];
	}
	if (typeof pattern === "string" && pattern.length > 0) {
		return value.split(pattern).filter(Boolean);
	}
	return splitWords(deburr(value));
};

export { escapeFn as escape, parseIntFn as parseInt, unescapeFn as unescape };
