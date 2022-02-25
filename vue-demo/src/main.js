// 根据node_modules内vue的package.json配置的module项加载具体js
import Vue from 'vue'
// // 从node_modules下直接指定具体js
// import Vue from 'vue/dist/vue.min.js'

import App from './App.vue'

// 引入vue-router
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

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
  // 使用vue-router插件后就可以配置router
  router
})
// 浏览器的历史记录 栈
// 点击浏览器的后退按钮 指针向下推移一位
// 点击浏览器的前进按钮 指针向上推移一位
// push模式
// 每一次点击都是入栈最新一条记录并指向栈顶指针
// 如果当前指针没有指向栈顶而进行了入栈操作(即点击了新的按钮或者当前页面内跳转新的连接)
// 那么先将当前指针(不包括自己)到栈顶指针全部出栈再进行一次入栈并指向栈顶操作

// 入栈前
// --- 8
// --- 7
// --- 6
// --- 5
// --> 4        (当前指针指向4此时入栈后栈的结构如下)
// --- 3
// --- 2
// --- 1

// 入栈后
// --> 5        (之前的5678都会出栈 再新入栈一个5)  
// --- 4        
// --- 3
// --- 2
// --- 1

// replace模式
// 每一次点击都是先出栈再入栈最新一条记录并指向栈顶指针
// 如果当前指针没有指向栈顶而进行了入栈操作(即点击了新的按钮或者当前页面内跳转新的连接)
// 那么使用入栈替换当前指针 指针位置不变

// 入栈前
// --- 8
// --- 7
// --- 6
// --- 5
// --> 4        (当前指针指向4此时入栈后栈的结构如下)
// --- 3
// --- 2
// --- 1

// 入栈后
// --- 8
// --- 7
// --- 6
// --- 5
// --> 4        (使用新的4替换旧的4)  
// --- 3
// --- 2
// --- 1