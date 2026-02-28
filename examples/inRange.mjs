import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.inRange(3, 2, 4);
// => true
zhiaiwanUtils.inRange(4, 8);
// => true
zhiaiwanUtils.inRange(4, 2);
// => false
zhiaiwanUtils.inRange(2, 2);
// => false
zhiaiwanUtils.inRange(1.2, 2);
// => true
zhiaiwanUtils.inRange(5.2, 4);
// => false
zhiaiwanUtils.inRange(-3, -2, -6);
// => true
