import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = ["a", "b", "c", "a", "b", "c"];
zhiaiwanUtils.pullAll(array, ["a", "c"]);
console.log(array);
// => ['b', 'b']
