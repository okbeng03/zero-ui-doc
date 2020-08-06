---
title: 默认配置
---

# 默认配置
```javascript
export default {
  // 表格配置
  table: {
    tableLayout: 'fixed',
    locale: {
      filterConfirm: '确定',
      filterReset: '重置',
      emptyText: '暂无数据'
    },
    size: 'default',
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      size: 'default'
    },
    loading: false
  },
  // 搜索配置
  search: {
    method: 'post',
    // 表单配置，行内表单
    form: {
      layout: 'inline',
      labelAlign: 'right',
      okText: '查询',
      validate: false,
      hideRequiredMark: true
    },
    // 查询默认参数
    params: {}
  }
}
```
