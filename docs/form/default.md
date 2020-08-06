---
title: 基础规则
---

# 基础规则
基于 JSON schema 规范描述，我们可以生成以下默认类型的表单元素：

Schema                | Form Type
:------------------- | :-------
type: string & format: date、date-time、time | date
type: string & enum属性 | select
type: string          | text
type: number          | number
type: integer         | number
type: boolean         | switch
type: object          | fieldset
type: array & enum属性 | checkboxs
type: array           | list可增删
