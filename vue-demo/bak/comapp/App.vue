<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <ComApp />
  </div>
</template>

<script>
import ComApp from "./components/ComApp";

export default {
  name: "App",
  components: {
    ComApp,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>