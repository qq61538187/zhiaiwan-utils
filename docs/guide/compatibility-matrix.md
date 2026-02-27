# Compatibility Matrix

This matrix tracks behavior compatibility against `4.17.23`.

## Compatible

- **Path core**: `at`, `get`, `set`, `has`, `hasIn`, `result`, `unset`, `toPath`, `property`, `propertyOf`, `method`, `methodOf`
- **Object helpers**: `keys`, `values`, `pickBy`, `omitBy`, `findKey`, `mapValues`, `mapKeys`, `assign`, `defaults`, `invert`
- **Iteratee shorthands**: `iteratee`, `map`, `filter`, `groupBy`, `keyBy`, `countBy`, `every`, `some`, `includes`, `size`, `matches`, `matchesProperty`, `conforms`
- **Compose flow**: `flow`, `flowRight`
- **Common util**: `identity`, `constant`, `noop`, `defaultTo`, `times`, `range`, `rangeRight`, `nthArg`, `stub*`, `uniqueId`
- **Global helpers**: `mixin`, `runInContext`, `noConflict` in global-like runtime scenarios

## Partially Compatible

- **Wrapper/chain**: provides minimal `.chain()/.value()/.thru()/.tap()` semantics for mixin-attached methods, not full lazy sequence internals
- **Deep equality scope**: internal equality targets compatible method cases, not a full standalone `isEqual` API surface

## Intentional Differences

- **ESM runtime**: strict global mutation semantics are primarily guaranteed for CJS/UMD-style usage; ESM encourages explicit instance usage
- **Public API scope**: this project only implements selected categories and methods, not the full method universe

