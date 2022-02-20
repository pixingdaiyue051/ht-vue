// 根据node_modules内vue的package.json配置的module项加载具体js
import Vue from 'vue'
// // 从node_modules下直接指定具体js
// import Vue from 'vue/dist/vue.min.js'

import App from './App.vue'

Vue.config.productionTip = false

// 全局注册混合
// import {mx1,mx2} from './scripts/mixin1.js'
// Vue.mixin(mx1)
// Vue.mixin(mx2)

// 在vm创建之前先注册插件再使用
// 默认会将Vue原型作为第一个参数传入插件
// import p1 from './scripts/plugin1.js';
// Vue.use(p1)

// 全局事件总线 globle event bus
// 1.所有的组件都可以无限制访问到
// 2.总线上有$on $off $emit方法
// 3.使用Vue的原型对象作为总线
// 4.$on注册 $off销毁 $emit触发
// 5.注册总线事件的组件的销毁之前一定要先销毁自己注册的自定义事件

// 1.创建一个空VueCompont注册成全局总线
// const d = Vue.extend({})
// const bus = new d()
// Vue.prototype.bus = bus

// 2.直接使用root根vm对象作为全局总线
// 借助beforeCreated钩子函数

new Vue({
  el: "#root",
  // render: function (createElement) {
  //   return createElement(App);
  // },
  // render(createElement) {
  //   return createElement(App);
  // },
  // render: (createElement) => {
  //   return createElement(App);
  // },
  // render: createElement => createElement(App),
  render: h => h(App),
  // // 注册组件
  // components: { App },
  // // 使用组件
  // template: '<App/>'
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})