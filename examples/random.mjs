import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.random(0, 5);
// => an integer between 0 and 5
zhiaiwanUtils.random(5);
// => also an integer between 0 and 5
zhiaiwanUtils.random(5, true);
// => a floating-point number between 0 and 5
zhiaiwanUtils.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
