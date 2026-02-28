# Scripts Architecture

This directory contains the automation pipeline for metadata, build artifacts, and release quality gates.

## Directory Responsibilities

- `meta/`: canonical method inventory and grouping metadata (single source of truth).
- `index/`: generate/check `src/index.ts` from metadata.
- `exports/`: sync/check/verify `package.json` exports and generated export artifacts.
- `build/`: build ESM/CJS/UMD/types outputs.
- `verify/`: verify methods/docs/artifacts contracts.
- `dev/`: local developer guards (node smoke, commit message checks).
- `bench/`: benchmark execution helpers.

## Canonical Execution Flow

1. Update metadata (`scripts/meta/method-groups.mjs`) when API inventory changes.
2. Regenerate generated outputs:
   - `pnpm run gen:index`
   - `pnpm run sync:exports`
3. Run validation gates:
   - fast feedback: `pnpm run validate:fast`
   - full gate: `pnpm run validate:full`
   - publish gate: `pnpm run validate:publish`

## Guardrails

- Do not manually edit generated outputs:
  - `src/index.ts`
  - `scripts/exports/exports.generated.json`
  - `package.json` `exports` field
- Prefer script entrypoints over ad-hoc command sequences to avoid drift.
