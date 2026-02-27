# Migration Notes

## Key Changes

- `compose` is replaced by `flowRight`
- Path/iteratee related methods now share unified internal kernels, reducing edge-case drift
- `mixin`, `runInContext`, `noConflict` are implemented around instance-oriented behavior
- Minimal wrapper/chain semantics are available for mixin-registered methods

## What to Update

- Replace imports/usages of `compose` with `flowRight`
- If relying on global mutation side effects, prefer CJS/UMD runtime; in ESM, use explicit instances where possible
- For plugin-style extensions, use `mixin(target, source, { chain })` and keep chain behavior explicit

## Verification Checklist

- Run `pnpm run test:run`
- Run `pnpm run build`
- Run `pnpm run verify:types`
- Run `pnpm run docs:build`

