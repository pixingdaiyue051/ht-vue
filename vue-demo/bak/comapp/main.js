// 根据node_modules内vue的package.json配置的module项加载具体js
import Vue from 'vue'
// // 从node_modules下直接指定具体js
// import Vue from 'vue/dist/vue.min.js'

import App from './App.vue'

Vue.config.productionTip = false

// 全局混合
import { mx1, mx2 } from './scripts/mixin1.js'
Vue.mixin(mx1)
Vue.mixin(mx2)

// 全局插件
// 在vm创建之前先注册插件再使用
// 默认会将Vue原型作为第一个参数传入插件
import p1 from './scripts/plugin1.js'
Vue.use(p1)

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
})