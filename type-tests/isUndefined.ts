import type * as moduleRef from "../src/isUndefined";

type ModuleShape = typeof moduleRef;
const typedModuleRef: ModuleShape | undefined = undefined;
void typedModuleRef;
