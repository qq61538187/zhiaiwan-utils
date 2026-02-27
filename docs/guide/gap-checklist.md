# Gap Checklist

This checklist tracks function-level coverage against `4.17.23` for the agreed 10 categories:
`Array / Collection / Date / Function / Lang / Math / Number / Object / Seq / String`
(excluding `Util` in this round).

## Coverage Criteria

- Coverage criteria per function:
  - in method groups
  - has source file
  - has root export
  - has grouped export
  - has doc anchor
  - has type test reference
  - has runtime test mention

## Current Gap Summary

| Category | Total | Fully covered | Missing |
| --- | ---: | ---: | ---: |
| Array | 66 | 66 | 0 |
| Collection | 30 | 30 | 0 |
| Date | 1 | 1 | 0 |
| Function | 23 | 23 | 0 |
| Lang | 56 | 56 | 0 |
| Math | 15 | 15 | 0 |
| Number | 3 | 3 | 0 |
| Object | 53 | 53 | 0 |
| Seq | 3 | 3 | 0 |
| String | 30 | 30 | 0 |

Current state is maintained manually and should stay green after each behavior-alignment batch.

## Batch Order (Risk-Based)

1. `Array + Collection` (high count, many data-transform helpers, broad downstream impact)
2. `Function + Lang + Math + Number` (function decorators + numeric/typing edge semantics)
3. `Object + Seq + String` (prototype/descriptor risks + chaining semantics + template/string edge cases)

## Risk Notes

- **Prototype and path safety**: object-path methods must keep prototype-pollution guards.
- **Mutation semantics**: array/object mutating methods must match in-place behavior exactly.
- **Alias parity**: aliases (`first/each/entries/extend/methods/...`) must ship with the same coverage as canonical names.
- **Seq parity**: `chain/tap/thru` plus wrapper-facing behavior should align with current instance-core strategy.
- **Native implementation only**: methods are self-implemented with compatible behavior; no runtime `method/*` proxy imports in `src`.

