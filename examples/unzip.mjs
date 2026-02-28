import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var zipped = zhiaiwanUtils.zip(["a", "b"], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
zhiaiwanUtils.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
