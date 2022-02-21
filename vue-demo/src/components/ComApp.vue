<template>
  <div>
    <h3>{{ title }}</h3>
    <!-- 
      组件之间的事件传递 props 
      c1p直接传文本
      c1po js表达式
      c1m1 将方法传递给子组件 组件内使用props接收
      c1m2 为子组件注册一个自定义事件 组件内使用this.$emit('c1m2')触发
      自定义事件加上.native修饰符使其变成原生事件
    -->
    <C1 ref="c1" c1p="c1p" :c1po="post1" :c1m1="demo1" @c1m2="demo2" @click.native="demoClick" />
    <hr />
    <C2 ref="c2" />
  </div>
</template>

<script>
import C1 from "./C1";
import C2 from "./C2";

export default {
  name: "ComApp",
  components: {
    C1,
    C2,
  },
  data() {
    return {
      title: "子组件ComApp",
      post1: { m1: 111, m2: 222 },
    };
  },
  methods: {
    demo1() {
      console.log("demo1");
    },
    // 第一个参数使用p1接收, ...表示其他参数全部归到params数组内
    demo2(p1, ...params) {
      console.log("demo2", p1, params);
    },
    demo3(o1) {
      console.log("demo3", JSON.stringify(o1));
    },
    demoClick(evt) {
      console.log("demoClick", evt);
    },
  },
  mounted() {
    // 使用ref 为子组件注册一个自定义事件 组件内使用this.$emit('c1m3')触发
    // 编码方法注册自定义事件更加灵活 可以做更多的操作
    this.$refs.c1.$on("c1m3", this.demo3);
  },
};
</script>