import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createExpectedExports } from './exports-map.mjs'

const rootDir = process.cwd()
const packagePath = resolve(rootDir, 'package.json')
const pkg = JSON.parse(await readFile(packagePath, 'utf8'))

const expectedExports = createExpectedExports()
const before = JSON.stringify(pkg.exports)
const after = JSON.stringify(expectedExports)

if (before === after) {
  console.info('[fix-exports] package.json exports already up to date.')
  process.exit(0)
}

pkg.exports = expectedExports
await writeFile(packagePath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8')
console.info(`[fix-exports] Updated package.json exports with ${Object.keys(expectedExports).length} entries.`)
