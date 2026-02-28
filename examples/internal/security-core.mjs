import { isUnsafePropertyKey } from "../../dist/es/internal/security-core.js";

console.log(isUnsafePropertyKey("__proto__"));
console.log(isUnsafePropertyKey("safeKey"));
// => true
// => false
