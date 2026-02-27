# API Categories

`@zhiaiwan/utils` API is organized by stable category names so you can map methods directly.

## Categories

- [Array](/api/array)
- [Collection](/api/collection)
- [Date](/api/date)
- [Function](/api/function)
- [Lang](/api/lang)
- [Math](/api/math)
- [Number](/api/number)
- [Object](/api/object)
- [Seq](/api/seq)
- [String](/api/string)
- [Util](/api/util)
- [Grouped Exports](/api/grouped)
- [Properties](/api/properties)
- [Legacy API Entry](/api/core)

Each category page includes:

- Per-method sections with `Since`, `Arguments`, `Returns`, and `Example`.
- Sidebar anchors so clicking a method jumps to the corresponding section.

## Example Source Policy

- API examples are aligned to Lodash `4.17.23` and extracted from the live docs page via `/agent-browser`.
- Source page: `https://lodash.com/docs/4.17.23`
- Evidence and mapping files:
  - `/docs/guide/lodash-example-mapping.md`
  - `/docs/guide/lodash-browser-evidence.json`
- For methods without a direct Lodash page entry, docs use the closest mapped API and include a `Mapped from Lodash` note.
