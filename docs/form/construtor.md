* Form
  * components 组件，对组件的一些属性进行扩展封装
    * array 数组数据渲染，增删移动
    * control form-item，这里对antdv很重要，因为他的校验规则`v-decorator`是这里定义的
  * core 核心规则解析
    * addons 插件规则，可以把一个页面的一个模块看成一种插件，可以任意扩展，目前只有表单（table就是 form + table）\
    addon方法，会拿到自己相关的规则，自行解析渲染
      * form 表单规则、渲染
    * definition 规则解析、合并
      * rules schema推不出来的规则在这里定义
    * schema
      * rules 详细规则，一些基础规则可以通过schema推导
    * config.js 默认配置
    * index.js 依个解析每个addon
  * mixins vue mixin
    * form.js 这是核心，包含寻址、或者值操作
  * validate 校验相关
* util
  * schemaPath.js 会将schema转成跟json对象路径map
