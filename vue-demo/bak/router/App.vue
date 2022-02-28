<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue router demo</h2>
          <button @click="back">后退</button>
          <button @click="forward">前进</button>
          <button @click="go">go</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 
            router-link 解析成 超链接 
            to 指向route中的path active-class 是激活时使用的class
            to 可以使用/也可以不使用/
            每次通过route跳转组件都是对应组件重新创建(当前组件不再是焦点组件是会被销毁)
            replace属性将改变浏览器记录这一次点击为replace模式(参考main.js中的注释)
            replace式简写模式 完整为 :replace="true"
           -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 
              router-link 被激活时会将route中配置的组件加载到 router-view中
            -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    back() {
      // 后退一次操作 浏览器点击后退按钮
      this.$router.back();
      // history.back();
    },
    forward() {
      // 前进一次操作 浏览器点击前进按钮
      this.$router.forward();
      // history.forward();
    },
    go() {
      // 前进指定步长
      // 负数则后退 正数则前进
      // 当前指针加步长超出当前栈长度则不做任何操作
      this.$router.go(3);
      // history.go(3);
    },
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
    console.log(history);
    console.log(document.URL);

    // 禁用浏览器回退前进操作
    // history.pushState(null, null, null);
    // history.replaceState(null, null, null);
    // window.addEventListener('popstate', function() {
    //   history.pushState(null, null, null);
    //   history.replaceState(null, null, null);
    // });
  },
};

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
</script>