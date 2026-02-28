import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.groupBy(["one", "two", "three"], "length");
// => { '3': ['one', 'two'], '5': ['three'] }
