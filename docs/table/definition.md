---
title: Definition
---

# Definition
包含了
* table
列表展示、分页相关，其核心是 `columns` 表格列的配置描述。
* search
数据查询相关
* 查询API
  * 查询表单配置（复用ZeroUI.Form）
  * operation
批量操作配置
* actions
列表相关 methods
* 其他addons描述（*支持扩展的描述*）

## 数据结构
```javascript
{
  // 表格相关配置
  table: {
    // table 样式
    tableLayout: 'fixed',
    bordered: false,
    locale: {
      filterConfirm: '确定',
      filterReset: '重置',
      emptyText: '暂无数据'
    },
    size: 'default',
    title: '',

    // 分页
    pagination: {
      current: 1,
      pageSize: 20,
      showQuickJumper: false,
      showSizeChanger: false,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      total: 100,
      size: 'default' // 默认继承table
    },
    
    // columns
    columns: [
      'key', // 跟jsonSchema结合
      // more
      {
        title: '',
        key: '',
        type: 'text', // 根据type来设置部分默认属性
        
        // 筛选配置
        filters: [
          {
            text: '',
            value: ''
          }
        ],

        // 排序设置
        sorter: true,
        sortOrder: false,
        sortDirections: ['ascend', 'descend'],
        
        // 自定义渲染相关
        customRender: (h, text, record, index) => {},

        // 特有配置
        options: {},

        // 表头分组
        children: [

        ],

        // 列样式
        align: 'left',
        width: '',
        ellipsis: false,
        colSpan: 1,
        fixed: 'left'
      }
    ],

    // 展开内容渲染
    expandedRowRender: function (record, index, indent, expended) {},

    // 选择处理
    rowKey: '',
    rowSelection: {
      columnTitle: '',
      fixed: false,
      hideDefaultSelections: false,
      type: 'checkbox'
    }
  },

  // 搜索模块配置： filter、sort、search 全部走服务端
  search: {
    form: {
      // zero-form 相关配置
    },
    // 默认参数
    params: {},
    // 查询API
    api: ''
  },

  // 批量操作模块配置
  operation: {
    items: [
      {
        type: 'primary',
        action: 'upload',

        // 开启confirm确认
        confirm: {
          title: '',
          icon: ''
        },

        // 特有配置
        options: {
          template: ''
        }
      }
    ]
  },

  // 列表相关 methods
  actions: {
    xxx: function (e, text, record, index) {}
  }
}
```
