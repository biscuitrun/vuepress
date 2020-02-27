const path = require('path')

module.exports = {
  title: '羊毛的博客',
  description: '前端小白，大家一起来学习呀!',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }],
    ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
  ],
  markdown: {
    lineNumbers: true,  // 代码显示行号
  },
  lastUpdated: 'Last Updated',    // 显示更新时间
  dest: './docs/.vuepress/dist', // dist文件路径
  ga: '',
  evergreen: true,
  themeConfig: {
    logo:"/favicon.ico",   // 导航栏左边logo,不写就不显示
    nav: require('./nav.js'),   // 引入导航栏 ,
    sidebarDepth: 2, // 提取侧边栏题目的深度
    sidebar: require('./siderbar.js') // 引入侧边栏
    // sidebar: auto,
    // sidebar: ['/', '/guide', 'blog'], // 所有页面显示一个侧边栏
    // sidebar: [ // 所有页面显示一个侧边栏
    //   {
    //     title: '首页',
    //     collapsable: false, //是否展开
    //   },
    //   ['/'],
    //   {
    //     title: '指南',
    //     collapsable: false,
    //     children: [
    //       '/', '['./blog/test/mocha','mocha介绍']', 'blog'
    //     ]
    //   },
    //   {
    //       title: '博文',
    //       collapsable: false
    //   },
    //   ['./guide/','指南']
    // ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@vuepress': path.join(__dirname, '../images/vuepress'),
      }
    }
  }
}

