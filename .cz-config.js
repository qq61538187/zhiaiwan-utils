module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: 新功能',
    },
    {
      value: 'fix',
      name: 'fix: 修复bug',
    },
    {
      value: 'perf',
      name: 'perf: 性能优化',
    },
    {
      value: 'style',
      name: 'style: 样式变动',
    },
    {
      value: 'docs',
      name: 'docs: 文档/注释',
    },
    {
      value: 'refactor',
      name: 'refactor: 重构',
    },
    {
      value: 'ci',
      name: 'ci: 持续集成',
    },
    {
      value: 'chore',
      name: 'chore: 依赖更新/脚手架配置修改等',
    },
    {
      value: 'wip',
      name: 'wip: 开发中',
    },
    {
      value: 'workflow',
      name: 'workflow: 工作流改进',
    },
    {
      value: 'types',
      name: 'types: 类型修改',
    },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72,
};
