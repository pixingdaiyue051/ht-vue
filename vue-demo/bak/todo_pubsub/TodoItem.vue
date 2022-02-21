<template>
  <li>
    <!-- <input type="checkbox" v-model="todoItem.finished" /> -->
    <input
      type="checkbox"
      :checked="todoItem.finished"
      @change="handlerChange(todoItem.id)"
    />
    <span>{{ todoItem.title }}</span>
    <button @click="handlerDelete(todoItem.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ["todoItem"],
  methods: {
    handlerChange(id) {
      pubsub.publish("checkTodo", id);
    },
    handlerDelete(id) {
      if (!confirm("确认删除吗?")) {
        return;
      }
      pubsub.publish("deleteTodo", id);
    },
  },
};
</script>

<style scoped>
</style>