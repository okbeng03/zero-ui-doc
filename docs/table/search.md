---
title: 查询
---

# 查询
我们拼接一套统一的查询格式

## 请求参数
```javascript
{
  current: 1,
  pageSize: 10,
  filters: {
    "key": [...filters]
  },
  sorter: {
    "key": "order" // 'ascend'、'descend'
  },
  search: {
    "key": "value"
  }
}
```

## 响应结构
```javascript
{ 
  // 列表数据
  list: [
    {
      ...
    }
  ],
  pageSize: 10,
  current: 1,
  total: 100
}
```

## Intercepts
我们的请求是 `axios`，所以可以通过 `axios.interceptors` 来拦截请求，实现结构映射。具体文档参照 axios 文档
