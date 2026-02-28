import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
zhiaiwanUtils.pullAllBy(array, [{ x: 1 }, { x: 3 }], "x");
console.log(array);
// => [{ 'x': 2 }]
