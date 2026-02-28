import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "fred", age: 48 },
	{ user: "barney", age: 36 },
	{ user: "fred", age: 30 },
	{ user: "barney", age: 34 },
];
zhiaiwanUtils.sortBy(users, [(o) => o.user]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
zhiaiwanUtils.sortBy(users, ["user", "age"]);
// => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
