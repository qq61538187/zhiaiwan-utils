import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.each([1, 2], (value) => {
	console.log(value);
});
// => Logs `1` then `2`.
zhiaiwanUtils.each({ a: 1, b: 2 }, (_value, key) => {
	console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
