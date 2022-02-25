<template>
  <div class="cateItem">
    <h3>{{ title }}分类</h3>
    <!-- 默认插槽 提前占位 标签体内是默认展示的信息 -->
    <slot>默认插槽 空数据</slot>
    <!-- 具名插槽 -->
    <slot name="s1">具名插槽 空数据</slot>
    <!-- 作用域插槽 适用于数据在插槽子组件内 dom由使用者提供 -->
    <slot :arr="arr">作用域插槽 空数据</slot>
  </div>
</template>

<script>
export default {
  name: "CateItem",
  props: ["title"],
  data() {
    return {
      arr: ["1111", "2222", "3333", "4444", "5555"],
    };
  },
};
</script>

<style scoped>
.cateItem {
  background-color: skyblue;
  width: 300px;
  height: 300px;
}
h3 {
  background-color: orange;
  text-align: center;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>