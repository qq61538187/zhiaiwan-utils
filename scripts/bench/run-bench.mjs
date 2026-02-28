import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { performance } from "node:perf_hooks";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist/es");
const baselinePath = resolve(rootDir, "benchmarks/baseline.json");

const ensureBuilt = async () => {
	try {
		await readFile(resolve(distDir, "zhiaiwanUtils.js"), "utf8");
	} catch {
		throw new Error('Benchmark requires built artifacts. Run "pnpm run build" before benchmark.');
	}
};

const benchmark = async (name, setup, run, iterations = 2_000) => {
	const state = setup();
	const startedAt = performance.now();
	for (let index = 0; index < iterations; index += 1) {
		run(state, index);
	}
	const elapsedMs = performance.now() - startedAt;
	return {
		name,
		iterations,
		totalMs: Number(elapsedMs.toFixed(3)),
		perIterationUs: Number(((elapsedMs * 1000) / iterations).toFixed(3)),
	};
};

await ensureBuilt();

const utils = await import(resolve(distDir, "zhiaiwanUtils.js"));
const pathModule = await import(resolve(distDir, "toPath.js"));
const isEqualModule = await import(resolve(distDir, "isEqual.js"));

const results = [];

results.push(
	await benchmark(
		"merge_shallow_objects",
		() => ({
			left: { a: 1, nested: { b: 2 } },
			right: { c: 3, nested: { d: 4 } },
		}),
		(state) => {
			utils.merge({ ...state.left }, state.right);
		},
	),
);

results.push(
	await benchmark(
		"set_get_nested_path",
		() => ({ target: {} }),
		(state, index) => {
			utils.set(state.target, "a[0].b", index);
			utils.get(state.target, "a[0].b");
		},
	),
);

results.push(
	await benchmark(
		"toPath_parse",
		() => ({ path: "a[0].b['c']" }),
		(state) => {
			pathModule.toPath(state.path);
		},
		5_000,
	),
);

results.push(
	await benchmark(
		"isEqual_nested",
		() => ({
			left: { a: [1, 2, { b: 3 }], c: { d: true } },
			right: { a: [1, 2, { b: 3 }], c: { d: true } },
		}),
		(state) => {
			isEqualModule.isEqual(state.left, state.right);
		},
	),
);

await mkdir(resolve(rootDir, "benchmarks"), { recursive: true });
await writeFile(
	baselinePath,
	`${JSON.stringify(
		{
			generatedAt: new Date().toISOString(),
			nodeVersion: process.version,
			results,
		},
		null,
		2,
	)}\n`,
	"utf8",
);

console.info("[bench] Benchmark baseline written:", baselinePath);
