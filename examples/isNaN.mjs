import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isNaN(NaN);
// => true
zhiaiwanUtils.isNaN(new Number(NaN));
// => true
Number
	// => true
	.isNaN(undefined);
// => true
zhiaiwanUtils.isNaN(undefined);
// => false
