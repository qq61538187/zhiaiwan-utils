import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var flipped = zhiaiwanUtils.flip((...args) => zhiaiwanUtils.toArray(args));
flipped("a", "b", "c", "d");
// => ['d', 'c', 'b', 'a']
