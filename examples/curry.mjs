import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const _ = undefined;

var abc = (a, b, c) => [a, b, c];
var curried = zhiaiwanUtils.curry(abc);
curried(1)(2)(3);
// => [1, 2, 3]
curried(1, 2)(3);
// => [1, 2, 3]
curried(1, 2, 3);
// => [1, 2, 3]
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
