<template>
  <div v-show="total">
    <input type="checkbox" v-model="isAll" />
    <span>已选{{ choosed }}/共{{ total }}</span>
    <button @click="handlerDelete()">删除</button>
  </div>
</template>

<script>
export default {
  name: "TodoBottom",
  props: ["todoList", "checkAllTodo", "deleteAllTodo"],
  methods: {
    handlerDelete() {
      if (!this.choosed) {
        return;
      }
      if (!confirm("确认删除吗?")) {
        return;
      }
      this.deleteAllTodo();
    },
  },
  computed: {
    choosed() {
      return this.todoList.reduce(
        (pre, cur) => pre + (cur.finished ? 1 : 0),
        0
      );
    },
    total() {
      return this.todoList.length;
    },
    isAll: {
      get() {
        return this.choosed === this.total;
      },
      set(val) {
        this.checkAllTodo(val);
      },
    },
  },
};
</script>

<style scoped>
</style>