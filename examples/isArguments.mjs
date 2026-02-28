import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isArguments(
	(function () {
		// biome-ignore lint/complexity/noArguments: Demonstrates real Arguments object behavior.
		return arguments;
	})(),
);
// => true
zhiaiwanUtils.isArguments([1, 2, 3]);
// => false
