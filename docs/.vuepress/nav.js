module.exports = [ // 配置导航栏路由
  { text: '主页', link: '/' },
  { text: '指南', link: '/api/guide/' },
  { text: '博文', link: '/api/blog/' },
  { text: '关于作者', link: '/api/author/' },
  {
    text: '语言',
    items: [ // 一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表
      { text: 'Chinese', link: '/api/language/chinese/' },
      { text: 'English', link: '/api/language/english/' }
    ]
  },
  { text: '帮助', link: 'https://www.baidu.com' }
]