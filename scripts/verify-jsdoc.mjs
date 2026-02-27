/**
 * Purpose：Enforce required JSDoc tags and minimum example quality for public API methods.
 * Used in：`pnpm run verify:jsdoc`, executed in `prepublishOnly`.
 * Why：Keeps API documentation contract complete and prevents publishing undocumented or inconsistent public APIs.
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const srcDir = resolve(rootDir, "src");
const indexPath = resolve(srcDir, "index.ts");

const indexContent = await readFile(indexPath, "utf8");
const methodExports = [
	...indexContent.matchAll(
		/^export \{ ([A-Za-z0-9_]+) \} from ["']\.\/([A-Za-z0-9_]+)\.js["']/gm,
	),
].map((match) => ({ methodName: match[1], fileBase: match[2] }));

const requiredTags = ["@since", "@category", "@param", "@returns", "@example"];
const issues = [];

const parseDocBlock = (content, exportPos) => {
	const before = content.slice(0, exportPos);
	const docStart = before.lastIndexOf("/**");
	const docEnd = before.lastIndexOf("*/");
	if (docStart < 0 || docEnd <= docStart) return "";
	return before.slice(docStart, docEnd + 2);
};

const hasExampleCallAndResult = (docBlock) => {
	const examplePos = docBlock.indexOf("@example");
	if (examplePos < 0) return false;
	const tail = docBlock.slice(examplePos);
	const lines = tail
		.split("\n")
		.map((line) =>
			line
				.replace(/^\s*\/\*\*?\s?/, "")
				.replace(/^\s*\*\s?/, "")
				.replace(/\s*\*\/$/, "")
				.trim(),
		)
		.filter(Boolean);
	const hasCall = lines.some(
		(line) =>
			!line.startsWith("//") && line.includes("(") && line.includes(")"),
	);
	const hasResult = lines.some((line) => line.includes("// =>"));
	return hasCall && hasResult;
};

for (const { methodName, fileBase } of methodExports) {
	const sourcePath = resolve(srcDir, `${fileBase}.ts`);
	const source = await readFile(sourcePath, "utf8");
	const exportMatcher = new RegExp(
		`export\\s+function\\s+${methodName}\\b|export\\s+const\\s+${methodName}\\b|export\\s*\\{[^}]*\\b${methodName}\\b[^}]*\\}`,
	);
	const exportMatch = exportMatcher.exec(source);
	if (!exportMatch) {
		issues.push(`${fileBase}.ts: missing export statement for "${methodName}"`);
		continue;
	}

	const docBlock = parseDocBlock(source, exportMatch.index);
	if (!docBlock) {
		issues.push(`${fileBase}.ts: missing JSDoc for "${methodName}"`);
		continue;
	}

	for (const tag of requiredTags) {
		if (!docBlock.includes(tag)) {
			issues.push(`${fileBase}.ts: missing ${tag} for "${methodName}"`);
		}
	}

	if (!hasExampleCallAndResult(docBlock)) {
		issues.push(
			`${fileBase}.ts: invalid @example for "${methodName}" (must include call and // => output)`,
		);
	}
}

if (issues.length > 0) {
	throw new Error(
		`[verify-jsdoc] Found ${issues.length} issue(s):\n${issues.join("\n")}`,
	);
}

console.info(
	`[verify-jsdoc] Verified JSDoc for ${methodExports.length} public methods.`,
);
