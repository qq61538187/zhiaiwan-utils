import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  FULL_ENTRY_METHOD_NAMES,
  GROUP_METHODS,
  GROUP_EXPORTS,
  ROOT_METHODS
} from './method-groups.mjs'

const rootDir = process.cwd()
const srcDir = resolve(rootDir, 'src')
const indexPath = resolve(srcDir, 'index.ts')

const ensureUnique = (label, values) => {
  const duplicated = values.filter((value, index) => values.indexOf(value) !== index)
  if (duplicated.length > 0) {
    throw new Error(`${label} contains duplicated method names: ${[...new Set(duplicated)].join(', ')}`)
  }
}

const ensureSubset = (label, subset, superset) => {
  const set = new Set(superset)
  const missing = subset.filter((name) => !set.has(name))
  if (missing.length > 0) {
    throw new Error(`${label} are not included in ROOT_METHODS: ${missing.join(', ')}`)
  }
}

for (const [groupName, methodNames] of Object.entries(GROUP_METHODS)) {
  ensureUnique(`${groupName.toUpperCase()}_METHODS`, methodNames)
  ensureSubset(`${groupName.toUpperCase()}_METHODS`, methodNames, ROOT_METHODS)
}
ensureUnique('GROUP_EXPORTS', GROUP_EXPORTS)
ensureUnique('ROOT_METHODS', ROOT_METHODS)
ensureUnique('FULL_ENTRY_METHOD_NAMES', FULL_ENTRY_METHOD_NAMES)
ensureSubset('ROOT_METHODS', ROOT_METHODS, FULL_ENTRY_METHOD_NAMES)
ensureSubset("FULL_ENTRY_METHOD_NAMES core helpers ['tap', 'thru']", ['tap', 'thru'], FULL_ENTRY_METHOD_NAMES)

for (const name of ROOT_METHODS) {
  const methodSourcePath = resolve(srcDir, `${name}.ts`)
  try {
    await access(methodSourcePath)
  } catch {
    throw new Error(`Missing source file for method "${name}": ${methodSourcePath}`)
  }
}

const indexContent = await readFile(indexPath, 'utf8')
for (const name of ROOT_METHODS) {
  const exportLine = `export { ${name} } from './${name}.js'`
  if (!indexContent.includes(exportLine)) {
    throw new Error(`Missing index export for method "${name}": ${exportLine}`)
  }
}

for (const groupName of GROUP_EXPORTS) {
  const exportLine = `export const ${groupName} = Object.freeze({`
  if (!indexContent.includes(exportLine)) {
    throw new Error(`Missing grouped export declaration for "${groupName}": ${exportLine}`)
  }
}

console.info(`[verify-methods] Verified ${ROOT_METHODS.length} root methods and source/index consistency.`)
