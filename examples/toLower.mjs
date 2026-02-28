import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toLower("--Foo-Bar--");
// => '--foo-bar--'
zhiaiwanUtils.toLower("fooBar");
// => 'foobar'
zhiaiwanUtils.toLower("__FOO_BAR__");
// => '__foo_bar__'
