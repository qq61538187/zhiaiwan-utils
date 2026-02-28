import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.forEachRight([1, 2], (value) => {
	console.log(value);
});
// => Logs `2` then `1`.
