<template>
  <!-- 模板 -->
  <div>
    <h3>{{ name }}</h3>
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
    }
  },
}
</script>

<style scoped>
/* 样式 */
/* scoped 表示该样式只作用当前组件 */
</style>
