# Benchmarks

This directory stores baseline benchmark outputs for hot internal paths.

## Targets

- `merge` object merge path
- `set/get` nested path operations
- `toPath` parsing path
- `isEqual` nested comparison

## Run

```bash
pnpm run bench
```

Output is written to `benchmarks/baseline.json`.

## Usage in Reviews

- If a PR touches hot internals (`path-core`, `object-native`, `iteratee-core`), include before/after benchmark output.
- Small variance is expected; investigate large regressions before merge.
