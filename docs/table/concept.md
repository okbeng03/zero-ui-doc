---
title: 核心概念
---

# 核心概念
配置化列表方案的核心：
* 列表数据查询、获取
* 列表展示、格式化
* 相关操作

## [JSON schema](http://json-schema.org/)
因为列表一般展示的是「表单」保存进库的数据，表单中 JSON Schema 很好地描述了 JSON 数据结构，部分描述我们希望能复用到列表中：
* 数据 formatter: 通过 schema 描述实现一些默认 customRender，以实现更友好的展示
* 生成查询表单

## Definition
### table
列表展示、分页相关，其核心是 `columns` 表格列的配置描述。

### search
数据查询相关
* 查询API
* 查询表单配置（复用ZeroUI.Form）

### operation
批量操作配置

### actions
列表相关 methods
