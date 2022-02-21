<template>
  <!-- 模板 -->
  <div>
    <h3>{{ title }}</h3>
    <TodoTop />
    <TodoList :todoList="todoList" />
    <TodoBottom :todoList="todoList" />
  </div>
</template>

<script>
import TodoTop from "./TodoTop";
import TodoBottom from "./TodoBottom";
import TodoList from "./TodoList";
import pubsub from "pubsub-js";

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
    // 使用_占位不使用该参数
    addTodo(_, todoObj) {
      console.log(msgTitle);
      this.todoList.unshift(todoObj);
    },
    checkTodo(_, id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
      });
    },
    deleteTodo(_, id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    checkAllTodo(_, checkedEvt) {
      this.todoList.forEach((todo) => (todo.finished = checkedEvt));
    },
    deleteAllTodo(_) {
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
  mounted() {
    this.addTodoId = pubsub.subscribe("addTodo", this.addTodo);
    this.checkTodoId = pubsub.subscribe("checkTodo", this.checkTodo);
    this.deleteTodoId = pubsub.subscribe("deleteTodo", this.deleteTodo);
    this.checkAllTodoId = pubsub.subscribe("checkAllTodo", this.checkAllTodo);
    this.deleteAllTodoId = pubsub.subscribe("deleteAllTodo", this.deleteAllTodo);
  },
  beforeDestory() {
    pubsub.unsubscribe(this.addTodoId);
    pubsub.unsubscribe(this.checkTodoId);
    pubsub.unsubscribe(this.deleteTodoId);
    pubsub.unsubscribe(this.checkAllTodoId);
    pubsub.unsubscribe(this.deleteAllTodoId);
  },
};
</script>

<style scoped>
</style>