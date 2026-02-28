/**
 * Purpose：Centralized validator for package.json exports against canonical mapping.
 * Used in：check-exports and verify-exports wrappers.
 * Why：Avoids duplicated validation logic and drift between local/CI checks.
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { EXPORTS_ARTIFACT_PATH, readExportsArtifact } from "./exports-artifact.mjs";
import { createExpectedExports } from "./exports-map.mjs";

export const assertExportsSync = async ({
	strict = false,
	messagePrefix = "[exports-sync]",
} = {}) => {
	const rootDir = process.cwd();
	const packagePath = resolve(rootDir, "package.json");
	const pkg = JSON.parse(await readFile(packagePath, "utf8"));
	const expected = createExpectedExports();
	let artifact;
	try {
		artifact = await readExportsArtifact();
	} catch {
		throw new Error(
			`${messagePrefix} missing exports artifact at ${EXPORTS_ARTIFACT_PATH}. Run "pnpm run sync:exports".`,
		);
	}

	if (!pkg.exports || typeof pkg.exports !== "object") {
		throw new Error(
			`${messagePrefix} package.json exports is missing. Run "pnpm run sync:exports".`,
		);
	}

	const compareExportsMaps = (actualMap, targetMap) => {
		const actualKeys = Object.keys(actualMap).sort();
		const targetKeys = Object.keys(targetMap).sort();
		const missingKeys = targetKeys.filter((key) => !(key in actualMap));
		const extraKeys = actualKeys.filter((key) => !(key in targetMap));
		const mismatchedFields = [];

		for (const key of targetKeys) {
			const targetEntry = targetMap[key];
			const actualEntry = actualMap[key];
			if (!actualEntry) continue;
			for (const field of ["types", "import", "require", "default"]) {
				if (actualEntry[field] !== targetEntry[field]) {
					mismatchedFields.push(
						`${key}.${field}: expected "${targetEntry[field]}", got "${actualEntry[field]}"`,
					);
				}
			}
		}

		return { actualKeys, targetKeys, missingKeys, extraKeys, mismatchedFields };
	};

	const artifactStatus = compareExportsMaps(artifact, expected);
	if (
		artifactStatus.missingKeys.length ||
		artifactStatus.extraKeys.length ||
		artifactStatus.mismatchedFields.length
	) {
		const lines = [
			`${messagePrefix} exports artifact is out of sync with method metadata.`,
			artifactStatus.missingKeys.length
				? `- Missing: ${artifactStatus.missingKeys.join(", ")}`
				: "",
			artifactStatus.extraKeys.length ? `- Extra: ${artifactStatus.extraKeys.join(", ")}` : "",
			...artifactStatus.mismatchedFields.map((line) => `- ${line}`),
			'Fix: run "pnpm run sync:exports" and commit the result.',
		].filter(Boolean);
		throw new Error(lines.join("\n"));
	}

	const packageStatus = compareExportsMaps(pkg.exports, artifact);
	if (
		packageStatus.missingKeys.length ||
		packageStatus.extraKeys.length ||
		packageStatus.mismatchedFields.length
	) {
		const lines = [
			`${messagePrefix} package.json exports is out of sync.`,
			packageStatus.missingKeys.length ? `- Missing: ${packageStatus.missingKeys.join(", ")}` : "",
			packageStatus.extraKeys.length ? `- Extra: ${packageStatus.extraKeys.join(", ")}` : "",
			...packageStatus.mismatchedFields.map((line) => `- ${line}`),
			'Fix: run "pnpm run sync:exports" and commit the result.',
		].filter(Boolean);
		throw new Error(lines.join("\n"));
	}

	if (!strict) {
		return { totalPaths: artifactStatus.targetKeys.length };
	}

	for (const key of packageStatus.actualKeys) {
		const actualEntry = pkg.exports[key];
		if (!actualEntry || typeof actualEntry !== "object") {
			throw new Error(`${messagePrefix} invalid exports entry: ${key} must be an object.`);
		}
		for (const field of Object.keys(actualEntry)) {
			if (!["types", "import", "require", "default"].includes(field)) {
				throw new Error(`${messagePrefix} invalid field in exports entry: ${key}.${field}`);
			}
		}
	}

	return { totalPaths: artifactStatus.targetKeys.length };
};
