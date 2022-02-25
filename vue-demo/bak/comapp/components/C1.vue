<template>
  <!-- 模板 -->
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li>{{ c1p }}</li>
      <li>{{ c1po.m1 }}</li>
      <li>{{ c1po.m2 }}</li>
    </ul>
    <button @click="btn1">btn1</button>
    <button @click="btn2">btn2</button>
    <button @click="btn3">btn3</button>
    <button @click="btnDestory">销毁自定义事件</button>
  </div>
</template>

<script>
// 数据交互代码
// 使用默认暴露方式
// export {obj}
export default {
  name: "C1",
  data() {
    return {
      title: "props使用demo",
    };
  },
  // 数组形式只能简单接收
  // props:['c1p','c1po']
  // 对象形式可以做数据校验
  props: {
    c1p: {
      // 类型
      type: String,
      // 是否必穿
      required: false,
      // 默认值
      default: "0",
      // 校验函数
      // validator: function (value) {
      //   return value >= 0;
      // },
    },
    c1po: {
      m1: {
        type: Number,
        required: false,
        default: 1,
      },
      m2: {
        type: Number,
        required: false,
        default: 2,
      },
    },
    c1m1: {},
  },
  methods: {
    btn1() {
      this.c1m1();
    },
    btn2() {
      this.$emit("c1m2", this.title, 33, 545, 134, "4ss3232");
    },
    btn3() {
      this.$emit("c1m3", { id: 21, title: this.title, gender: "female" });
    },
    btnDestory() {
      // 只能销毁自定义事件 不能销毁原生事件包括props
      // 当前组件销毁前会先销毁全部自定义事件
      // 当前组件的父组件销毁前会先销毁其所有子组件及自定义事件
      // this.$off("c1m1");
      // this.$off("c1m2"); // 销毁指定的自定义事件
      // this.$off(["c1m2", "c1m3"]);// 销毁多个自定义事件
      this.$off();// 销毁全部自定义事件
    },
  },
};
</script>

<style scoped>
/* 样式 */
/* scoped 表示该样式只作用当前组件 */
</style>
