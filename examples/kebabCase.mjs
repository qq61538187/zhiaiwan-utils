import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.kebabCase("Foo Bar");
// => 'foo-bar'
zhiaiwanUtils.kebabCase("fooBar");
// => 'foo-bar'
zhiaiwanUtils.kebabCase("__FOO_BAR__");
// => 'foo-bar'
