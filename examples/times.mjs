import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.times(3, String);
// => ['0', '1', '2']
zhiaiwanUtils.times(4, zhiaiwanUtils.constant(0));
// => [0, 0, 0, 0]
