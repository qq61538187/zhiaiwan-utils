import { castArray, isArrayLikeObject, toNumber } from "../../dist/es/internal/lang-native.js";

console.log(castArray(1));
console.log(isArrayLikeObject({ 0: "a", length: 1 }));
console.log(toNumber(" 42 "));
// => [1]
// => true
// => 42
