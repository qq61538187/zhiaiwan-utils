import { spawnSync } from "node:child_process";

const EXT_RE = /\.(ts|tsx|js|jsx|json|mjs|md)$/;
const SKIP_FILES = new Set(["src/index.ts"]);

const list = spawnSync("git", ["diff", "--cached", "--name-only", "--diff-filter=ACMR"], {
	encoding: "utf8",
});

if (list.error) {
	throw list.error;
}
if (list.status !== 0) {
	process.exit(list.status ?? 1);
}

const stagedFiles = list.stdout
	.split("\n")
	.map((line) => line.trim())
	.filter(Boolean);

const filesToCheck = stagedFiles.filter((file) => EXT_RE.test(file) && !SKIP_FILES.has(file));

if (filesToCheck.length === 0) {
	process.exit(0);
}

const biome = spawnSync(
	"pnpm",
	["exec", "biome", "check", "--write", "--no-errors-on-unmatched", ...filesToCheck],
	{ stdio: "inherit" },
);

if (biome.error) {
	throw biome.error;
}
if ((biome.status ?? 1) !== 0) {
	process.exit(biome.status ?? 1);
}

const add = spawnSync("git", ["add", "--", ...filesToCheck], {
	stdio: "inherit",
});

if (add.error) {
	throw add.error;
}

process.exit(add.status ?? 1);
