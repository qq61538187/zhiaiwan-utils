import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

let parsed = zhiaiwanUtils.attempt((value) => JSON.parse(value), "{bad json}");
if (zhiaiwanUtils.isError(parsed)) {
	parsed = {};
}

console.log(parsed);
// => {}
