import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

// Avoid costly calculations while the window size is in flux.
jQuery(window).on("resize", zhiaiwanUtils.debounce(calculateLayout, 150));
// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on(
	"click",
	zhiaiwanUtils.debounce(sendMail, 300, {
		leading: true,
		trailing: false,
	}),
);
// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = zhiaiwanUtils.debounce(batchLog, 250, { maxWait: 1000 });
var source = new EventSource("/stream");
jQuery(source).on("message", debounced);
// Cancel the trailing debounced invocation.
jQuery(window).on("popstate", debounced.cancel);
// => Debounced function calls are rate-limited by the configured wait/options.
