/**
 * Purpose：Provide reusable line templates for utility methods injected into generated full-entry files.
 * Used in：build-runtime and build-esm when composing top-level entry artifacts.
 * Why：Keeps generated utility method sections consistent across build targets and avoids duplicated generator logic.
 */
export const createFullEntryUtilityLines = ({ indent = "  " } = {}) => {
	const i = indent;

	return [`${i}tap: function (value, interceptor) { interceptor(value); return value; },`];
};
