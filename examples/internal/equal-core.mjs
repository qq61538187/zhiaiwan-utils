import { isEqualCore } from "../../dist/es/internal/equal-core.js";

console.log(isEqualCore({ a: [1, 2] }, { a: [1, 2] }));
console.log(isEqualCore({ a: 1 }, { a: 2 }));
// => true
// => false
