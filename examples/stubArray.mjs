import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var arrays = zhiaiwanUtils.times(2, zhiaiwanUtils.stubArray);
console.log(arrays);
// => [[], []]
console.log(arrays[0] === arrays[1]);
// => false
