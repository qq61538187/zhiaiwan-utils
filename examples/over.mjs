import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var func = zhiaiwanUtils.over([Math.max, Math.min]);
func(1, 2, 3, 4);
// => [4, 1]
