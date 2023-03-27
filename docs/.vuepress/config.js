const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "clarkliu1314.github.com",
  description: 'vdoing博客主题模板',
  base: '/clarkliu1314.github.com/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
// vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "cbef7b888f407be1dad7",
        clientSecret: "7702eb21d19ebb94173ad8b3a7ae657aea184999",
        owner: "clarkliu1314",
        repo: "clarkliu1314.github.com",
      },
    ],
  ],
  themeConfig,
}