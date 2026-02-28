import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.lowerCase("--Foo-Bar--");
// => 'foo bar'
zhiaiwanUtils.lowerCase("fooBar");
// => 'foo bar'
zhiaiwanUtils.lowerCase("__FOO_BAR__");
// => 'foo bar'
