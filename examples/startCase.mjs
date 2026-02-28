import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.startCase("--foo-bar--");
// => 'Foo Bar'
zhiaiwanUtils.startCase("fooBar");
// => 'Foo Bar'
zhiaiwanUtils.startCase("__FOO_BAR__");
// => 'FOO BAR'
