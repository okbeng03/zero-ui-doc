---
title: 基础规则
---

# 基础规则
基于 JSON Schema 描述，我们实现一些默认 customRender，以实现更友好的展示

* type=string
  * `format=email`: a标签 - email
  * `format=date || date-time || time`: moment format
    * options.format: 自定义format；defaults [YYYY-MM-DD|YYYY-MM-DD HH:mm:ss|HH:mm:ss']
  * `format=uri`: a标签
    * options.taget: default _blank
    * options.title
  * `format=image`: img标签
    * options.width
    * options.height
  * `enum`: 展示枚举文本
    * options.options: 枚举
