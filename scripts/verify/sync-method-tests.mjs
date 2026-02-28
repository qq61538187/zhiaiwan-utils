/**
 * Purpose：Create missing mirror test files so tests/type-tests match src structure 1:1.
 * Used in：manual maintenance via `pnpm run sync:method-tests`.
 * Why：Contributors can locate exact test targets per source file path.
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const testsDir = resolve(rootDir, "tests");
const typeTestsDir = resolve(rootDir, "type-tests");

const toPosixPath = (value) => value.split("\\").join("/");

const collectSrcFiles = async (directory, base = "") => {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const relPath = base ? `${base}/${entry.name}` : entry.name;
		const absPath = resolve(directory, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await collectSrcFiles(absPath, relPath)));
			continue;
		}
		if (entry.isFile() && relPath.endsWith(".ts")) {
			files.push(relPath);
		}
	}
	return files;
};

const ensureFile = async (path, content) => {
	try {
		await readFile(path, "utf8");
		return false;
	} catch {
		await mkdir(dirname(path), { recursive: true });
		await writeFile(path, content, "utf8");
		return true;
	}
};

const runtimeTemplate = (srcRelPath, runtimeRelPath) => {
	const importTarget = toPosixPath(
		relative(dirname(runtimeRelPath), resolve(rootDir, "src", srcRelPath)),
	).replace(/\.ts$/, "");
	const id = srcRelPath.replace(/\.ts$/, "");
	return `import { describe, expect, it } from "vitest";
import * as moduleRef from "${importTarget.startsWith(".") ? importTarget : `./${importTarget}`}";

describe("src/${id}", () => {
\tit("module is importable", () => {
\t\texpect(moduleRef).toBeDefined();
\t});
});
`;
};

const typeTemplate = (srcRelPath, typeRelPath) => {
	const importTarget = toPosixPath(
		relative(dirname(typeRelPath), resolve(rootDir, "src", srcRelPath)),
	).replace(/\.ts$/, "");
	return `import * as moduleRef from "${importTarget.startsWith(".") ? importTarget : `./${importTarget}`}";

type ModuleShape = typeof moduleRef;
const typedModuleRef: ModuleShape | undefined = undefined;
void typedModuleRef;
`;
};

const srcFiles = (await collectSrcFiles(srcDir)).sort();
let createdRuntime = 0;
let createdType = 0;

for (const srcRelPath of srcFiles) {
	const baseNoExt = srcRelPath.replace(/\.ts$/, "");
	const runtimeAbs = resolve(testsDir, `${baseNoExt}.test.ts`);
	const typeAbs = resolve(typeTestsDir, `${baseNoExt}.ts`);

	if (
		await ensureFile(
			runtimeAbs,
			runtimeTemplate(srcRelPath, resolve(testsDir, `${baseNoExt}.test.ts`)),
		)
	) {
		createdRuntime += 1;
	}
	if (
		await ensureFile(typeAbs, typeTemplate(srcRelPath, resolve(typeTestsDir, `${baseNoExt}.ts`)))
	) {
		createdType += 1;
	}
}

console.info(
	`[sync-method-tests] Synced src-mirror tests. created runtime=${createdRuntime}, type=${createdType}, srcFiles=${srcFiles.length}.`,
);
