import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var rearged = zhiaiwanUtils.rearg((a, b, c) => [a, b, c], [2, 0, 1]);
rearged("b", "c", "a");
// => ['a', 'b', 'c']
