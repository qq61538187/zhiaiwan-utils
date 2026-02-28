import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: false },
	{ user: "fred", active: false },
	{ user: "pebbles", active: true },
];
zhiaiwanUtils.dropWhile(users, (o) => !o.active);
// => objects for ['pebbles']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, { user: "barney", active: false });
// => objects for ['fred', 'pebbles']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, ["active", false]);
// => objects for ['pebbles']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, "active");
// => objects for ['barney', 'fred', 'pebbles']
