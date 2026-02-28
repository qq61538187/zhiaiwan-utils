import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.snakeCase("Foo Bar");
// => 'foo_bar'
zhiaiwanUtils.snakeCase("fooBar");
// => 'foo_bar'
zhiaiwanUtils.snakeCase("--FOO-BAR--");
// => 'foo_bar'
