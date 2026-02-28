import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = ["a", "b", "c", "a", "b", "c"];
zhiaiwanUtils.pull(array, "a", "c");
console.log(array);
// => ['b', 'b']
