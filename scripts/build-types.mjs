import { writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { TYPES_DEFAULT_FILE, TYPES_ENTRY_FILE, TYPES_DEFAULT_IDENTIFIER } from './artifact-config.mjs'
import { GROUP_EXPORTS, GROUP_METHODS, ROOT_METHODS } from './method-groups.mjs'

const rootDir = process.cwd()
const distTypesDir = resolve(rootDir, 'dist/types')

const groupTypeIdentifier = (groupName) => `${groupName}Methods`

for (const groupName of GROUP_EXPORTS) {
  const methodNames = GROUP_METHODS[groupName]
  const identifier = groupTypeIdentifier(groupName)

  await writeFile(
    resolve(distTypesDir, `${groupName}.default.d.ts`),
    [
      ...methodNames.map((name) => `import type ${name} from './${name}.js';`),
      '',
      `declare const ${identifier}: {`,
      ...methodNames.map((name) => `  ${name}: typeof ${name};`),
      '};',
      '',
      `export default ${identifier};`,
      ''
    ].join(`\n`),
    'utf8'
  )

  await writeFile(
    resolve(distTypesDir, `${groupName}.d.ts`),
    [
      ...methodNames.map((name) => `export { default as ${name} } from './${name}.js';`),
      `export { default } from './${groupName}.default.js';`,
      ''
    ].join(`\n`),
    'utf8'
  )
}

await writeFile(
  resolve(distTypesDir, TYPES_DEFAULT_FILE),
  [
    ...ROOT_METHODS.map((name) => `import type ${name} from './${name}.js';`),
    ...GROUP_EXPORTS.map((groupName) => `import type ${groupName}Methods from './${groupName}.js';`),
    '',
    `declare const ${TYPES_DEFAULT_IDENTIFIER}: {`,
    ...ROOT_METHODS.map((name) => `  ${name}: typeof ${name};`),
    ...GROUP_EXPORTS.map((groupName) => `  ${groupName}: typeof ${groupName}Methods;`),
    '  VERSION: string;',
    '  methods: () => string[];',
    '  has: (name: string) => boolean;',
    '  tap: <T>(value: T, interceptor: (value: T) => void) => T;',
    '  thru: <T, R>(value: T, interceptor: (value: T) => R) => R;',
    `  mixin: (source: Record<string, unknown>) => typeof ${TYPES_DEFAULT_IDENTIFIER};`,
    `  runInContext: () => typeof ${TYPES_DEFAULT_IDENTIFIER};`,
    `  noConflict: () => typeof ${TYPES_DEFAULT_IDENTIFIER};`,
    '  chain: (input: unknown) => {',
    '    value: () => unknown;',
    '    tap: (interceptor: (value: unknown) => void) => any;',
    '    thru: (interceptor: (value: unknown) => unknown) => any;',
    '    [key: string]: any;',
    '  };',
    '};',
    '',
    `export default ${TYPES_DEFAULT_IDENTIFIER};`,
    ''
  ].join(`\n`),
  'utf8'
)

await writeFile(
  resolve(distTypesDir, TYPES_ENTRY_FILE),
  [
    ...ROOT_METHODS.map((name) => `export { default as ${name} } from './${name}.js';`),
    ...GROUP_EXPORTS.map((groupName) => `export { default as ${groupName} } from './${groupName}.js';`),
    `export { default } from './${TYPES_DEFAULT_FILE.replace('.d.ts', '.js')}';`,
    ''
  ].join(`\n`),
  'utf8'
)

const cleanupCandidates = [
  'index.d.ts',
  'types.d.ts',
  'function.d.ts',
  'function.default.d.ts',
  'lodash.d.ts',
  'lodash.default.d.ts',
  'zhiaiwan-utils.d.ts',
  'zhiaiwan-utils.default.d.ts'
]
for (const fileName of cleanupCandidates) {
  try {
    await rm(resolve(distTypesDir, fileName))
  } catch (error) {
    if (!(error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT')) {
      throw error
    }
  }
}

