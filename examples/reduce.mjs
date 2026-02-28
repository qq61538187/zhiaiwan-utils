import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.reduce([1, 2], (sum, n) => sum + n, 0);
// => 3
zhiaiwanUtils.reduce(
	{ a: 1, b: 2, c: 1 },
	(result, value, key) => {
		if (!result[value]) {
			result[value] = [];
		}
		result[value].push(key);
		return result;
	},
	{},
);
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
