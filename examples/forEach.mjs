import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.forEach([1, 2], (value) => {
	console.log(value);
});
// => Logs `1` then `2`.
zhiaiwanUtils.forEach({ a: 1, b: 2 }, (_value, key) => {
	console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
