import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = ["a", "b", "c", "d"];
var pulled = zhiaiwanUtils.pullAt(array, [1, 3]);
console.log(array);
// => ['a', 'c']
console.log(pulled);
// => ['b', 'd']
