---
title: Definition
---

# Form Definition
Form Definition 是表单描述，包含了
* 表单描述
  * [Form Props](https://www.antdv.com/components/form-cn/#Form): 表单布局相关配置
  * [Form.Item Props](https://www.antdv.com/components/form-cn/#Form.Item): 表单Item Label、描述、布局相关配置
  * Input Props: 表单组件相关配置
* 其他addons描述（*支持扩展的描述*）

## 数据结构
```JSON
{
  "form": {
    // Form Props 默认配置
    "layout": "horizontal",
    "labelAlign": "right",
    "hideRequiredMark": false,
    "labelCol": {
      "span": 4,
      "offset": 0
    },
    "wrapperCol": {
      "span": 20,
      "offset": 0
    },
    "colon": true,
    "hideReset": false, // 是否隐藏重置按钮
    "validate": true, // 是否开启校验
    "okText": "提交",  // 提交按钮文案
    "cancelText": "重置", // 重置按钮文案
    // 表单元素定义
    "items": [
      "key", // 只指定key，使用 schema 默认规则
      {
        "key": "", // data path,
        "type": "a-radio", // 表单元素类型
        // Form.Item Props: 表单Item Label、描述、布局相关配置
        "formItem": {
          "title": "", // label 默认取schema title；为空可以去掉title
          ...
        },
        // Input Props: 表单组件相关配置
        "input": {
          "maxLength": 10,
          ...
        }
      },
      {
        "key": "a",
        "items": [
          {
            "key": "a[0]",
            "items": [
              "*"
            ]
          }
        ]
      }
    ]
  }
}
```

### 关键字解析
#### items
items 是一个数组，用于描述表单元素的顺序，支持嵌套。它的子集可以是以下内容：
* "*" 完全使用schema生成的默认表单，相当于没设置
* "key" JSON Object Path
* { key: "name", ... } Form Item 配置

#### key
JSON Object Path.

*数组元素只需使用下标0，后续的元素会在表单渲染时，根据index定义下标，保证 decorator 唯一ID*
