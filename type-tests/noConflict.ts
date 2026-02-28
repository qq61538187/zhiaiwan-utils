import type * as moduleRef from "../src/noConflict";

type ModuleShape = typeof moduleRef;
const typedModuleRef: ModuleShape | undefined = undefined;
void typedModuleRef;
