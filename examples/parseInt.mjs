import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.parseInt("08");
// => 8
zhiaiwanUtils.map(["6", "08", "10"], zhiaiwanUtils.parseInt);
// => [6, 8, 10]
