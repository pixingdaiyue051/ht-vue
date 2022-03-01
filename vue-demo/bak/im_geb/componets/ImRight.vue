<template>
  <div class="right-bar">
    <ul>
      <li v-for="item in messageList" :key="item.id">{{ item.msg }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImRight",
  props:['messageList']
};
</script>

<style scoped>
.right-bar {
  border: 1px solid #000;
  float: right;
  width: 698px;
  /* 700 */
  height: 698px;
  /* 700 */
}
</style>