import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.camelCase("Foo Bar");
// => 'fooBar'
zhiaiwanUtils.camelCase("--foo-bar--");
// => 'fooBar'
zhiaiwanUtils.camelCase("__FOO_BAR__");
// => 'fooBar'
