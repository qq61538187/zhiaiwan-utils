import { toIterateeCore } from "../../dist/es/internal/iteratee-core.js";

const pickName = toIterateeCore("name");
const isAdult = toIterateeCore(["age", 18]);

console.log(pickName({ name: "lxf" }));
console.log(isAdult({ age: 18 }));
// => lxf
// => true
