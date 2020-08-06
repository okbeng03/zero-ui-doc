---
title: 内置组件
---

# 内置组件
## 1. operation 操作列
```javascript
{
  type: 'operation',
  options: {
    items: [
      {
        type: 'primary', // 按钮类型
        action: 'onDetail',
        // 配置后开启confirm确认
        confirm: {
          title: '确认删除?'
        },
        text: '详情'
      }
    ]
  }
}
```
