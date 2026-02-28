import { compact, uniq } from "../../dist/es/internal/array-native.js";

console.log(compact([0, 1, false, 2, "", 3]));
console.log(uniq([1, 1, 2, 3, 3]));
// => [1, 2, 3]
// => [1, 2, 3]
