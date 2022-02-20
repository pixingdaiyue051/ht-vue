<template>
  <div>
    <ul>
      <TodoItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todoItem="todoItem"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: { TodoItem },
  props: ["todoList", "checkTodo",'deleteTodo'],
};
</script>

<style scoped>
</style>