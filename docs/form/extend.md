---
title: 扩展
---

# 扩展
内置组件和规则并不能支持更多样复杂的表单输入，所以提供了几个规则可以方便地去扩展：

```
import { formRules } from 'zero-ui'

const { addons, schemaRules, definitionRules, ajv } = formRules
```

## addons 模块扩展
默认只有「表单」一个模块，但是如果你的每个表单都有一个公用的模块，可以通过addons添加模块，当然也可以在自己的 Vue APP 里添加。

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
规则解析时，会解析schema type来生成默认规则[参考](/form/default.html)

```javascript
schemaRules = [
  {
    name: 'string', // 对应 schema type
    rules: [dateParse, selectParse, textParse]
  },
  ...
]
```
schema type 规则是一个数组，从左到右解析，有一条规则命中返回即停止；所以你可以通过添加、删除规则来自定义规则

```javascript
// 数字元素并且maximum <= 5时，用 Rate - 评分组件
schemaRules[1].rules.unshift(function (schema, parentSchema, definition, defaults) {
  const { type, maximum = Infinity } = schema

  if (type === 'number' && maximum <= 5) {
    const definition = {
      type: 'a-rate',
      decorator: {},
      input: {}
    }

    return definition
  }
})
```

## definition 扩展
definition 扩展有两种方式：
1. 直接在 definition form items 里添加响应规则，并已注册相应组件（适合不需要生成通过配置的场景）
```javascription
// 分数输入元素想用 slider - 滑块输入条
Vue.use(Rate)

definition: {
  form: {
    items: [
      {
        key: 'score',
        type: 'a-rate', // type 定义为表单组件 component name
        decorator: {}
      },
      '*'
    ]
  }
}
```
2. definitionRules 添加
```javascript
// 添加 upload 组件，并且统一上传接口
definitionRules.push({
  name: 'upload',
  parse: function (schema, parentSchema, definition) {
    return {
      type: 'a-upload',
      action: (file) => {
        ...
      },
      decorator: {}
    }
  }
})

// 这样就可以直接使用了
/**
definition: {
  form: {
    items: [
      {
        key: 'image',
        type: 'upload'
      },
      '*'
    ]
  }
}
**/
```

## 校验扩展
参考[表单校验章节](/form/validate.html)

## 注意事项
可以看出不管是「schema扩展」还是「definition扩展」，其实最后都是为了生成最后渲染表单的 `DSL`，这个 `DSL` 结构跟 `definition` 是很相似的。

#### 表单输入组件校验
因为表单的数据获取和校验是依赖于 antdv 的 「form decorator」来保证数据同步，所以输入元素要标明 `decorator: {}`来开启校验规则，否则不会校验该表单元素。

decorator 可以添加自定义规则，最后一条规则肯定是默认的 jsonschema 校验。
