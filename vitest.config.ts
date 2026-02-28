import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: false,
		testTimeout: 10_000,
		include: ["tests/**/*.test.ts"],
		reporters: ["default"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			include: ["src/**/*.ts"],
			exclude: ["src/index.ts", "src/types.ts", "src/**/*.d.ts"],
			thresholds: {
				branches: 70,
				functions: 80,
				lines: 75,
				statements: 75,
			},
		},
	},
});
