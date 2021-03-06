export default {
  bottomNav: {
    props: [{
      name: 'shift',
      type: 'Boolean',
      default: 'false',
      desc: '是否使用 shift 模式'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '必需，需要和子组件 bottomNavItem 配合'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 bottomNavItem 组件'
    }],
    events: [{
      name: 'change',
      desc: '当 value 改变的时触发，参数(value) value 新的value'
    }]
  },
  bottomNavItem: {
    props: [{
      name: 'icon',
      type: 'String',
      default: '',
      desc: '图标'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: '显示的标题'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '必需，当value 与父组件的 value值相等时，会变成选中状态'
    }]
  }
}
