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
export default {
  name: "TodoItem",
  props: ["todoItem", "checkTodo", "deleteTodo"],
  methods: {
    handlerChange(id) {
      this.checkTodo(id);
    },
    handlerDelete(id) {
      if (!confirm("确认删除吗?")) {
        return;
      }
      this.deleteTodo(id);
    },
  },
};
</script>

<style scoped>
</style>