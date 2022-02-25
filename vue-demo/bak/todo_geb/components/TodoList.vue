<template>
  <div>
    <ul>
      <TodoItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todoItem="todoItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: { TodoItem },
  props: ["todoList"],
};
</script>

<style scoped>
</style>