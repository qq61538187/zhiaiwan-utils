import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.defer((text) => {
	console.log(text);
}, "deferred");
// => Logs 'deferred' after one millisecond.
