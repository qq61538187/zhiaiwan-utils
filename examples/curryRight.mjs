import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const _ = undefined;

var abc = (a, b, c) => [a, b, c];
var curried = zhiaiwanUtils.curryRight(abc);
curried(3)(2)(1);
// => [1, 2, 3]
curried(2, 3)(1);
// => [1, 2, 3]
curried(1, 2, 3);
// => [1, 2, 3]
// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
