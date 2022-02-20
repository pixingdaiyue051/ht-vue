<template>
  <!-- 模板 -->
  <div>
    <h3>{{ title }}</h3>
    <TodoTop @addTodo="addTodo" />
    <TodoList
      :todoList="todoList"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
    <TodoBottom
      :todoList="todoList"
      @checkAllTodo="checkAllTodo"
      @deleteAllTodo="deleteAllTodo"
    />
  </div>
</template>

<script>
import TodoTop from "./TodoTop";
import TodoBottom from "./TodoBottom";
import TodoList from "./TodoList";

export default {
  name: "Todo",
  components: {
    TodoTop,
    TodoBottom,
    TodoList,
  },
  data() {
    return {
      title: "TodoList",
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    checkAllTodo(checkedEvt) {
      this.todoList.forEach((todo) => (todo.finished = checkedEvt));
    },
    deleteAllTodo() {
      this.todoList = this.todoList.filter((todo) => !todo.finished);
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(val) {
        localStorage.setItem("todoList", JSON.stringify(val));
      },
    },
  },
};
</script>

<style scoped>
</style>