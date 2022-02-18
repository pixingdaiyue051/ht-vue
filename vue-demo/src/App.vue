<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2 ref="ttp">{{ msg }}</h2>
    <!-- 组件之间的事件传递 props -->
    <C1 ref="c1" c1p="c1p" :c1po="post1" />
    <hr />
    <C2 ref="c2" />
    <hr />
    <Todo />
  </div>
</template>

<script>
import C1 from "./components/C1";
import C2 from "./components/C2";
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    C1,
    C2,
    Todo,
  },
  data() {
    return {
      msg: "hello world",
      post1: { m1: 111, m2: 222 },
    };
  },
  mounted() {
    // 输出全部由ref标签的dom元素
    console.log(this.$refs);
  },
};
</script>