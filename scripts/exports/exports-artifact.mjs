/**
 * Purpose：Manage generated exports artifact used as review-friendly sync checkpoint.
 * Used in：sync/check/verify exports scripts.
 * Why：Keeps package.json exports aligned with canonical metadata through one persisted artifact.
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

export const EXPORTS_ARTIFACT_PATH = resolve(
	process.cwd(),
	"scripts/exports/exports.generated.json",
);

export const readExportsArtifact = async () => {
	const raw = await readFile(EXPORTS_ARTIFACT_PATH, "utf8");
	return JSON.parse(raw);
};

export const writeExportsArtifact = async (exportsMap) => {
	await writeFile(EXPORTS_ARTIFACT_PATH, `${JSON.stringify(exportsMap, null, "\t")}\n`, "utf8");
};
