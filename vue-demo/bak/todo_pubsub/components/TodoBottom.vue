<template>
  <div v-show="total">
    <input type="checkbox" v-model="isAll" />
    <span>已选{{ choosed }}/共{{ total }}</span>
    <button @click="handlerDelete()">删除</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoBottom",
  props: ["todoList"],
  methods: {
    handlerDelete() {
      if (!this.choosed) {
        return;
      }
      if (!confirm("确认删除吗?")) {
        return;
      }
      pubsub.publish("deleteAllTodo");
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
        pubsub.publish("checkAllTodo", val);
      },
    },
  },
};
</script>

<style scoped>
</style>