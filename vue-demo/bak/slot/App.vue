<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <Category />
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>