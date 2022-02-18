<template>
  <!-- 模板 -->
  <div>
    <h3>{{ name }}</h3>
    <ul>
      <li>{{ c1p }}</li>
      <li>{{ c1po.m1 }}</li>
      <li>{{ c1po.m2 }}</li>
    </ul>
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
      name: "C1",
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
  },
}
</script>

<style scoped>
/* 样式 */
/* scoped 表示该样式只作用当前组件 */
</style>
