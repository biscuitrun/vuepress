module.exports = {
  // 多个侧边栏(分组)
  '/api/guide/': [
    {
      title: '基础', // 标签
      collapsable: false,
      children: [
        '',        // ./guide/README.md文件，对应页面上/bar/路径
        ['./base/base-1', '介绍'], // ./guide/base/base-1.md文件，对应页面上/guide/base/base-1.html
        ['./base/base-2', '快速上手']
      ],
    },
    {
      title: '深入',
      collapsable: false, //是否展开
    },
    ['./deep/deep-1', '深入1'],
    ['./deep/deep-2', '深入2']
  ],

  '/api/blog/': [
    '',
    './test/Jest',
    './test/mocha'
  ],
  // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
  '/': [
    '',
  ],
}

// module.exports = {
//   // 多个侧边栏
//   '/guide/': [
//     '',        // ./guide/README.md文件，对应页面上/bar/路径
//     ['./base/base-1', '介绍'], // ./guide/base/base-1.md文件，对应页面上/guide/base/base-1.html
//     ['./base/base-2', '快速上手']
//   ],
//   '/blog/': [
//     '',
//     './test/Jest',
//     './test/mocha'
//   ],
//   // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
//   '/': [
//     '',
//   ],
// }