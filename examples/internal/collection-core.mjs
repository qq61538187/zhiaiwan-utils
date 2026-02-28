import { toCollectionEntries } from "../../dist/es/internal/collection-core.js";

console.log(toCollectionEntries({ a: 1, b: 2 }));
// => [["a", 1], ["b", 2]]
