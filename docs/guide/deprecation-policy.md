# Deprecation Policy

This project prioritizes compatibility and predictable upgrades.

## Policy Scope

Applies to:

- public runtime APIs
- public type signatures
- documented import paths and grouped exports

## Lifecycle

1. **Announce**
   - Mark API as deprecated in docs.
   - Add replacement guidance (`replacement` and migration note).
2. **Grace Period**
   - Keep deprecated API behavior compatible for at least one minor cycle.
   - Avoid silent breaking changes during the grace window.
3. **Removal**
   - Remove only in the next major version.
   - Provide explicit migration steps in release notes and migration guide.

## Documentation Requirements

When deprecating an API, update all of:

- API docs section (`since` / `deprecated` / `replacement`)
- `docs/guide/migration.md`
- `CHANGELOG.md`/changesets release notes

## Implementation Rules

- No behavior changes hidden behind refactors.
- Keep alias-to-canonical compatibility until the announced removal major.
- Security fixes may accelerate removal only when keeping the API would be unsafe.
