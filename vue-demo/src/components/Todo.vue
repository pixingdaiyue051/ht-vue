<template>
  <!-- 模板 -->
  <div>
    <TodoTop :addTodo="addTodo" />
    <TodoList
      :todoList="todoList"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
    <TodoBottom 
      :choosed="choosed" 
      :total="total" 
      :checkAllTodo="checkAllTodo" 
      :deleteAllTodo="deleteAllTodo" 
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
      todoList: [
        { id: "1122", title: "哈哈", finished: true },
        { id: "3363", title: "不能的人", finished: false },
        { id: "6734", title: "5你说的发货", finished: true },
        { id: "5221", title: "44很多原因", finished: false },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    checkTodo(id) {
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    checkAllTodo(checkedEvt) {
      this.todoList.forEach(todo => todo.finished = checkedEvt);
    },
    deleteAllTodo() {
      this.todoList = this.todoList.filter(todo => !todo.finished);
    },
  },
  computed: {
    choosed() {
      return this.todoList.reduce((pre, cur) => pre + (cur.finished ? 1 : 0), 0);
    },
    total() {
      return this.todoList.length;
    },
  },
};
</script>

<style scoped>
</style>