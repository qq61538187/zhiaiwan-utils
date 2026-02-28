import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var initialize = zhiaiwanUtils.once(createApplication);
initialize();
initialize();
// => `createApplication` is invoked once
