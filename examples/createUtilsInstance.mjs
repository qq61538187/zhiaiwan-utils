import { createUtilsInstance } from "../dist/es/createUtilsInstance.js";

const instance = createUtilsInstance({ version: "demo" });
console.log(instance.version);
// => demo
