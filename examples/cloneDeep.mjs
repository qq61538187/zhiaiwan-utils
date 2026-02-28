import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ a: 1 }, { b: 2 }];
var deep = zhiaiwanUtils.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
