import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.defer((stamp) => {
	console.log(zhiaiwanUtils.now() - stamp);
}, zhiaiwanUtils.now());
// => Logs the number of milliseconds it took for the deferred invocation.
