import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = zhiaiwanUtils.times(2, zhiaiwanUtils.constant({ a: 1 }));
console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]
console.log(objects[0] === objects[1]);
// => true
