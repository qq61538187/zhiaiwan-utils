import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.chunk(["a", "b", "c", "d"], 2);
// => [['a', 'b'], ['c', 'd']]
zhiaiwanUtils.chunk(["a", "b", "c", "d"], 3);
// => [['a', 'b', 'c'], ['d']]
