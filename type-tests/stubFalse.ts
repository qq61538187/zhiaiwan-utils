import type * as moduleRef from "../src/stubFalse";

type ModuleShape = typeof moduleRef;
const typedModuleRef: ModuleShape | undefined = undefined;
void typedModuleRef;
