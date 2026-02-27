/**
 * Purpose：Centralize artifact constants (names, entry files, identifiers) shared by build/verify scripts.
 * Used in：build-runtime/build-esm/build-types/build-browser and verify-artifacts, plus exports mapping.
 * Why：Keeps all dist path conventions in one place, avoiding duplicated hard-coded strings and path drift.
 */
export const ARTIFACT_BASENAME = "zhiaiwanUtils";

const IDENTIFIER_PREFIX = "artifact";
const IDENTIFIER_REPLACEMENT = "_";
const normalizedIdentifier = ARTIFACT_BASENAME.replace(
	/[^a-zA-Z0-9_$]/g,
	IDENTIFIER_REPLACEMENT,
);

export const ARTIFACT_IDENTIFIER = /^[a-zA-Z_$]/.test(normalizedIdentifier)
	? normalizedIdentifier
	: `${IDENTIFIER_PREFIX}_${normalizedIdentifier}`;
export const TYPES_DEFAULT_IDENTIFIER = ARTIFACT_IDENTIFIER;

export const ESM_ENTRY_FILE = `${ARTIFACT_BASENAME}.js`;
export const ESM_DEFAULT_FILE = `${ARTIFACT_BASENAME}.default.js`;

export const RUNTIME_ENTRY_FILE = `${ARTIFACT_BASENAME}.js`;

export const BROWSER_ENTRY_FILE = `${ARTIFACT_BASENAME}.js`;
export const BROWSER_MIN_ENTRY_FILE = `${ARTIFACT_BASENAME}.min.js`;

export const TYPES_ENTRY_FILE = `${ARTIFACT_BASENAME}.d.ts`;
export const TYPES_DEFAULT_FILE = `${ARTIFACT_BASENAME}.default.d.ts`;
