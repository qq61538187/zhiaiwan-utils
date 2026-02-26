# Object

## Methods

- [`.pick`](#pick)

### pick(source, keys)
<a id="pick"></a>

Creates an object composed of picked own enumerable properties.

#### Since

`+0.1.0`

#### Arguments

1. `source` *(object)*: The source object.
2. `keys` *(readonly (keyof source)[])*: The property names to pick.

#### Returns

*(object)*: Returns the new picked object.

#### Example

```ts
import { pick } from '@zhiaiwan/utils'

pick({ id: 1, name: 'zw', active: true }, ['id', 'name'] as const)
// => { id: 1, name: 'zw' }
```
