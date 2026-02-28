import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [1, 2, 3, 4];
var evens = zhiaiwanUtils.remove(array, (n) => n % 2 === 0);
console.log(array);
// => [1, 3]
console.log(evens);
// => [2, 4]
