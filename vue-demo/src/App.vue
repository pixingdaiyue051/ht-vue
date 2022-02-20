<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <ComApp />
    <hr />
    <Todo />
  </div>
</template>

<script>
import ComApp from "./components/ComApp";
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    ComApp,
    Todo,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>