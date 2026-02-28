import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [1, 2, 3];
zhiaiwanUtils.fill(array, "a");
console.log(array);
// => ['a', 'a', 'a']
zhiaiwanUtils.fill(Array(3), 2);
// => [2, 2, 2]
zhiaiwanUtils.fill([4, 6, 8, 10], "*", 1, 3);
// => [4, '*', '*', 10]
