import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const numbers = zhiaiwanUtils.map(["6", "8", "10"], zhiaiwanUtils.ary(parseInt, 1));
console.log(numbers);
// => [6, 8, 10]
