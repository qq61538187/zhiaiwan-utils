import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

// Avoid excessively updating the position while scrolling.
jQuery(window).on("scroll", zhiaiwanUtils.throttle(updatePosition, 100));
// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
var throttled = zhiaiwanUtils.throttle(renewToken, 300000, { trailing: false });
jQuery(element).on("click", throttled);
// Cancel the trailing throttled invocation.
jQuery(window).on("popstate", throttled.cancel);
// => Throttled function calls are limited to at most once per wait window.
