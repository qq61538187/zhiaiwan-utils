import {
	attachWrapperMethod,
	createUtilsInstance,
	ensureWrapperSupport,
} from "../../dist/es/internal/instance-core.js";

const instance = ensureWrapperSupport(createUtilsInstance());
attachWrapperMethod(instance, "double", (value) => value * 2, true);
console.log(instance.chain(5).double().value());
// => 10
