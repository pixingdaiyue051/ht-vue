// 根据node_modules内vue的package.json配置的module项加载具体js
import Vue from 'vue'
// // 从node_modules下直接指定具体js
// import Vue from 'vue/dist/vue.min.js'

import App from './App.vue'

Vue.config.productionTip = false

// 使用vue-resource 插件发送xhr
// 在vm vc上加入$http事件 api和axios一致
import vueResource from 'vue-resource'
Vue.use(vueResource)

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
    // 注册全局事件总线
    Vue.prototype.$bus = this;
  }
})