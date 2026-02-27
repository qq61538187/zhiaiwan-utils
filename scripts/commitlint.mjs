/**
 * Purpose：Validate commit message content against the repository commit convention.
 * Used in：Husky `commit-msg` hook (`.husky/commit-msg`) on every local commit attempt.
 * Why：Enforces consistent commit history semantics and blocks malformed commit messages early.
 */
import { readFile } from "node:fs/promises";

const commitMsgPath = process.argv.slice(2).find((arg) => arg !== "--");

if (!commitMsgPath) {
	console.error("Missing commit message file path.");
	process.exit(1);
}

const message = (await readFile(commitMsgPath, "utf8")).trim();
const firstLine = message.split("\n")[0] ?? "";

const conventionalPattern =
	/^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z0-9._/-]+\))?!?: .+/;

if (!conventionalPattern.test(firstLine)) {
	console.error("Invalid commit message format.");
	console.error(
		"Expected Conventional Commit, e.g. feat(core): add deep merge support",
	);
	console.error(`Received: ${firstLine || "<empty>"}`);
	process.exit(1);
}
