module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // bug修复
        'perf', // 性能优化
        'style', // 样式变动
        'docs', // 文档/注释
        'refactor', // 重构
        'ci', // 持续集成
        'chore', // 依赖更新/脚手架配置修改等
        'revert', // 撤销修改
        'wip', //  开发中
        'workflow', // 工作流改进
        'types', // 类型修改
      ],
    ],
  },
};
