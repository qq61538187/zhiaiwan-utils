import { pad, startCase, trimStart } from "../../dist/es/internal/string-native.js";

console.log(pad("a", 3, "_"));
console.log(startCase("hello-world"));
console.log(trimStart("  hi"));
