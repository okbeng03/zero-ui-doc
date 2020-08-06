---
title: 表单校验
---

# 表单校验
Vue Form的校验是基于
* [ajv](https://www.npmjs.com/package/ajv)：更强大 JSON Schema 校验库，支持最新的 JSON Schema 规范
* [ajv-errors](https://www.npmjs.com/package/ajv-errors)：支持自定义校验错误提示

## 触发规则
表单校验是依赖于 antv form decorator rules，通过自定义校验规则，将值统一交由 ajv jsonschema 校验

## 添加自定义校验规则
我们通过 `formRules.ajv` 暴露了 Ajv 实例，所以你可以很容易添加自定义校验规则

* 通过[ajv.addFormat](https://www.npmjs.com/package/ajv#addformatstring-name-stringregexpfunctionobject-format---ajv) 添加自定义format规则
* 通过[ajv.addKeyword](https://www.npmjs.com/package/ajv#addkeywordstring-keyword-object-definition---ajv) 添加自定义keyword

## 修改校验提示
通过[ajv-errors](https://www.npmjs.com/package/ajv-errors)，我们可以很容易修改自定义校验错误提示
