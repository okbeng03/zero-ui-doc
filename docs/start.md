---
title: 快速上手
---

# 快速上手
Zero UI 基于 Ant Design UI。所以推荐跟 `antd` 一致在 `vue-cli 3` 中使用，使用方式一致。

## 按需加载
修改`babel.config.js`文件，配置 babel-plugin-import

```javascript
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
      'ant-design-name'
    ],
    [
      'import',
      { libraryName: 'zero-ui', libraryDirectory: 'es', style: true },
      'zero-ui'
    ]
  ]
}
```

## 定制主题
`Zero UI` 复用了 `antd` 的样式变量，所以只要定制 `antd` 的主题即可，所有样式变量可以在 [这里](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less) 找到。
