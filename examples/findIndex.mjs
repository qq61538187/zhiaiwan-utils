import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: false },
	{ user: "fred", active: false },
	{ user: "pebbles", active: true },
];
zhiaiwanUtils.findIndex(users, (o) => o.user === "barney");
// => 0
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findIndex(users, { user: "fred", active: false });
// => 1
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findIndex(users, ["active", false]);
// => 0
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findIndex(users, "active");
// => 2
