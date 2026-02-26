import { defineConfig } from 'vitepress'
import { GROUP_EXPORTS, GROUP_METHODS } from '../../scripts/method-groups.mjs'

const CATEGORY_META: Record<string, { text: string; doc: string }> = {
  array: { text: 'Array', doc: 'array' },
  func: { text: 'Function', doc: 'function' },
  object: { text: 'Object', doc: 'object' },
  math: { text: 'Math', doc: 'math' }
}

const PREFERRED_GROUP_ORDER = ['array', 'func', 'object', 'math']
const orderedGroups = [
  ...PREFERRED_GROUP_ORDER.filter((groupName) => GROUP_EXPORTS.includes(groupName)),
  ...GROUP_EXPORTS.filter((groupName) => !PREFERRED_GROUP_ORDER.includes(groupName))
]

const categorySidebarItems = orderedGroups.map((groupName) => {
  const meta = CATEGORY_META[groupName] ?? {
    text: groupName.charAt(0).toUpperCase() + groupName.slice(1),
    doc: groupName
  }
  const methods = GROUP_METHODS[groupName] ?? []

  return {
    text: meta.text,
    link: `/api/${meta.doc}`,
    collapsed: true,
    items: methods.map((methodName) => ({
      text: `.${methodName}`,
      link: `/api/${meta.doc}#${methodName}`
    }))
  }
})

const groupedExportsSidebarItem = {
  text: 'Grouped Exports',
  link: '/api/grouped',
  collapsed: true,
  items: GROUP_EXPORTS.map((groupName) => ({
    text: `.${groupName}`,
    link: `/api/grouped#${groupName}`
  }))
}

export default defineConfig({
  title: 'zhiaiwan-utils',
  description: 'ESM + TypeScript utility library documentation',
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/index' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            ...categorySidebarItems,
            groupedExportsSidebarItem,
            {
              text: 'Full Entry',
              link: '/api/full-entry',
              collapsed: true,
              items: [
                { text: '.VERSION', link: '/api/full-entry#version' },
                { text: '.methods', link: '/api/full-entry#methods' },
                { text: '.has', link: '/api/full-entry#has-name' },
                { text: '.mixin', link: '/api/full-entry#mixin-source' },
                { text: '.runInContext', link: '/api/full-entry#runincontext' },
                { text: '.noConflict', link: '/api/full-entry#noconflict' },
                { text: '.chain', link: '/api/full-entry#chain-input' },
                { text: '.tap', link: '/api/full-entry#tap-value-interceptor' },
                { text: '.thru', link: '/api/full-entry#thru-value-interceptor' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhiaiwan/utils' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 ZhiAiWan'
    }
  }
})
