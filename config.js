module.exports = {
  title: 'Zero UI',
  description: '前端中后台配置化UI',
  themeConfig: {
    nav: [
      { text: 'Zero UI', link: '/' },
      { text: 'Form', link: '/form/' },
      { text: 'Table', link: '/table/' },
    ],
    sidebar: {
      '/form/': [
        '',
        'concept',
        'default',
        'definition',
        'component',
        'validate',
        'extend',
        // {
        //   path: '',
        //   title: 'Demo 示例',
        //   children: [
        //     '/form/example/basic'
        //   ]
        // }
      ],
      '/table/': [
        '',
        'concept',
        'config',
        'default',
        'definition',
        'component',
        'search',
        'extend'
      ],
      '/': [
        '',
        'start',
        'component'
      ]
    }
  }
}
