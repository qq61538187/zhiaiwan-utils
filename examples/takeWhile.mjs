import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: false },
	{ user: "fred", active: false },
	{ user: "pebbles", active: true },
];
zhiaiwanUtils.takeWhile(users, (o) => !o.active);
// => objects for ['barney', 'fred']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, { user: "barney", active: false });
// => objects for ['barney']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, ["active", false]);
// => objects for ['barney', 'fred']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, "active");
// => []
