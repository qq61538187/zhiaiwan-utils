import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const files = args.filter((file) => file !== "src/index.ts");

if (files.length === 0) {
	process.exit(0);
}

const result = spawnSync(
	"pnpm",
	["exec", "biome", "check", "--write", "--no-errors-on-unmatched", ...files],
	{ stdio: "inherit" },
);

if (result.error) {
	throw result.error;
}

process.exit(result.status ?? 1);
