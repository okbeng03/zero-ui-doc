---
title: 扩展
---

# 扩展
内置组件和规则并不能支持更多样复杂的表单输入，所以提供了几个规则可以方便地去扩展：

```
import { tableRules } from 'zero-ui'

const { addons, schemaRules, definitionRules, operationAddonRules } = formRules
```

## addons 模块扩展
但是如果你的每个列表都有一个公用的模块，可以通过addons添加模块，当然也可以在自己的 Vue APP 里添加。

```javascript
// 添加一个表单标题
addons.unshift({
  name: 'title',
  parse: function (definition, schema, schemaPathMap) {
    const title = schema.title || ''
    const config = extend(true, {
      title
    }, definition)

    const render = function (h) {
      return h('h3', {}, [config.title])
    }

    // addon必须返回渲染函数
    return {
      config,
      render
    }
  }
})

// definition 可以添加 title 描述，覆盖默认规则
/**
definition: {
  form: {
    ...
  },
  title: {
    title: 'definition 定义的标题'
  }
}
**/
```

## schema 扩展
规则解析时，会解析schema type来生成默认规则[参考](/table/default.html)

```javascript
// boolean 类型，true 展示 `ACTIVE`，false 展示 `INACTIVE`
schemaRules.push({
  name: 'boolean',
  parse: function (key, schema, parentSchema, definition = {}) {
    return {
      render (h, text) {
        return <div>{ text ? 'ACTIVE' : 'INACTIVE' }</div>
      }
    }
  }
})
```

## definition 扩展
```javascript
// 添加 tag 组件
const typeMap = {
  A: '#f50',
  B: '#2db7f5',
  C: '#87d068'
}

definitionRules.push({
  name: 'tag',
  parse: function (key, schema, parentSchema, definition = {}) {
    return {
      render: function (h, text) {
        return h('a-tag', {
          props: {
            color: typeMap[text]
          }
        }, [text])
      }
    }
  }
})

// 这样就可以直接使用了
/**
definition: {
  table: {
    columns: [
      {
        key: 'status',
        type: 'tag'
      },
      ...
    ]
  }
}
**/
```

## operationAddonRules 扩展
operation addon 规则

```javascript
// 添加上传组件
operationAddonRules.push({
  name: 'upload',
  parse: function (options) {
    return {
      render: function (h) {
        return h('a-upload', {
          on: {
            change: 'onUpload'
          }
        }, [
          h('a-button', {}, [
            h('a-icon', {
              props: {
                type: 'upload'
              }
            }),
            '上传'
          ])
        ])
      }
    }
  }
})
```
