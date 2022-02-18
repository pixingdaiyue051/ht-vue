<template>
  <div>
    <input type="checkbox" v-model="checkedEvt" @change="handlerChange" />
    <span>已选{{ choosed }}/共{{ total }}</span>
    <button @click="handlerDelete()">删除</button>
    <h4>-------------------------------------</h4>
  </div>
</template>

<script>
export default {
  name: "TodoBottom",
  props: ["choosed", "total", "checkAllTodo", "deleteAllTodo"],
  data() {
    return {
      checkedEvt: false,
    };
  },
  methods: {
    handlerChange() {
      this.checkedEvt = !this.checkedEvt;
      this.checkAllTodo(this.checkedEvt);
    },
    handlerDelete() {
      if (!this.checkedEvt && !this.choosed) {
        return;
      }
      if (!confirm("确认删除吗?")) {
        return;
      }
      this.deleteAllTodo();
      this.checkedEvt = false;
    },
  },
};
</script>

<style scoped>
</style>