import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.transform(
	[2, 3, 4],
	(result, n) => {
		const squared = n * n;
		result.push(squared);
		return squared % 2 === 0;
	},
	[],
);
// => [4, 9]
zhiaiwanUtils.transform(
	{ a: 1, b: 2, c: 1 },
	(result, value, key) => {
		if (!result[value]) {
			result[value] = [];
		}
		result[value].push(key);
	},
	{},
);
// => { '1': ['a', 'c'], '2': ['b'] }
