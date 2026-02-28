import { getAtPath, setAtPath, toPathCore, unsetAtPath } from "../../dist/es/internal/path-core.js";

const target = {};
setAtPath(target, "a[0].b", 1);
console.log(getAtPath(target, "a[0].b"));
console.log(toPathCore("a[0].b['c']"));
console.log(unsetAtPath(target, "a[0].b"));
