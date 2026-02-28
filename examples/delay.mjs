import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.delay(
	(text) => {
		console.log(text);
	},
	1000,
	"later",
);
// => Logs 'later' after one second.
