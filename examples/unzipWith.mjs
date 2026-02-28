import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var zipped = zhiaiwanUtils.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
zhiaiwanUtils.unzipWith(zipped, zhiaiwanUtils.add);
// => [3, 30, 300]
