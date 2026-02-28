import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ a: 1 }, { b: 2 }];
var shallow = zhiaiwanUtils.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
