# Changesets Guide

This project uses Changesets for versioning and release notes.

## 1) Add a changeset

```bash
pnpm changeset
```

Follow the prompts to select affected packages, bump type (`patch` / `minor` / `major`), and summary text.

## 2) Apply version bumps

```bash
pnpm run changeset:version
```

This command updates package versions and generates/updates changelog entries.

## 3) Publish to npm

```bash
pnpm run changeset:publish
```

Notes:

- `NPM_TOKEN` must be configured
- The CI release workflow runs this step as well

## Recommended Practice

- Feature, behavior, and export changes should include a changeset
- Docs-only/comment-only changes may skip changeset (follow team rules)
