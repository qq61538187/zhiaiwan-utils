import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var say = zhiaiwanUtils.rest(
	(what, names) =>
		what +
		" " +
		zhiaiwanUtils.initial(names).join(", ") +
		(zhiaiwanUtils.size(names) > 1 ? ", & " : "") +
		zhiaiwanUtils.last(names),
);
say("hello", "fred", "barney", "pebbles");
// => 'hello fred, barney, & pebbles'
