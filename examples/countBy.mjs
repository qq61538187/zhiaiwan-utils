import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.countBy(["one", "two", "three"], "length");
// => { '3': 2, '5': 1 }
