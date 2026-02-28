import type * as moduleRef from "../src/noop";

type ModuleShape = typeof moduleRef;
const typedModuleRef: ModuleShape | undefined = undefined;
void typedModuleRef;
