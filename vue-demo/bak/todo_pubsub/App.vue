<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>