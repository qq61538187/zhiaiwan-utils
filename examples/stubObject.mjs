import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = zhiaiwanUtils.times(2, zhiaiwanUtils.stubObject);
console.log(objects);
// => [{}, {}]
console.log(objects[0] === objects[1]);
// => false
