import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: true },
	{ user: "fred", active: false },
	{ user: "pebbles", active: false },
];
zhiaiwanUtils.dropRightWhile(users, (o) => !o.active);
// => objects for ['barney']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, { user: "pebbles", active: false });
// => objects for ['barney', 'fred']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, ["active", false]);
// => objects for ['barney']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, "active");
// => objects for ['barney', 'fred', 'pebbles']
